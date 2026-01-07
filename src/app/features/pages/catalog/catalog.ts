import { CommonModule } from '@angular/common';
import { Component, effect, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsive } from '@core/services/responsive';
import { ContentModel } from '@features/shared/content-model/content-model';
import { Search } from '@features/shared/search/search';
import { TContent } from '@models/videoStreaming.model';

@Component({
  selector: 'app-catalog',
  imports: [
    ContentModel,
    Search,
    CommonModule

  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
  host: {
    '[style.padding]': `(responsive.isSm() || responsive.isXs()) ? '9px 20px' : '30px 10px 30px 150px'`

  }

})
export class Catalog {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  protected readonly responsive = inject(Responsive);

  protected readonly icon = "favicon.ico";

  private navState = signal<{
    fromSearch?: boolean;
    mode?: "full" | "search";
    catalog?: Array<{ params: string } & TContent>;

  }>({});

  private queryParams = toSignal(this.route.queryParamMap);

  public contentSearched = computed(() => {
    return this.navState().catalog ?? [];

  });

  constructor(){
    effect(() => {
      this.queryParams();
      this.navState.set(history.state);

    });

  }

  setContentSearched(content: Array<{ params: string } & TContent>): void {
    this.router.navigate([], {
      queryParams: {
        search: content[0].params

      },
      state: {
        fromSearch: true,
        mode: "search",
        catalog: content

      }

    });

  }

}
