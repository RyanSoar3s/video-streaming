import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { VideoStreaming } from '@core/services/video-streaming';
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
  protected readonly videoStreaming = inject(VideoStreaming);
  protected readonly responsive = inject(Responsive);

  protected readonly icon = "favicon.ico";

  protected contentSearched: Array<TContent> | null = null;

  setContentSearched(content: Array<TContent> | null): void {
    this.contentSearched = content;

  }

}
