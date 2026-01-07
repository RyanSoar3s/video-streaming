import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, output, viewChild } from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { VideoStreaming } from '@core/services/video-streaming';
import { TContent } from '@models/videoStreaming.model';

@Component({
  selector: 'app-search',
  imports: [
    CommonModule
],
  templateUrl: './search.html',
  styleUrl: './search.css',
  host: {
    '[style.height]': 'height()',
    '[style.width]': 'width()',
    '[style.margin]': 'margin()'

  }
})
export class Search {
  private search = viewChild<ElementRef<HTMLInputElement>>("search");
  private videoStreaming = inject(VideoStreaming);
  protected readonly responsive = inject(Responsive);

  protected readonly magnifyingGlass = "assets/home/magnifying-glass-white.png";

  height = input.required<string>();
  width = input.required<string>();
  margin = input<string>("0px");
  borderRadius = input<string>("0px");

  content = output<Array<{ params: string } & TContent>>();

  @HostListener("document:keydown", [ "$event" ])
  onClickEnter(event: KeyboardEvent): void {
    if (event.key === "Enter") this.searchContent();

  }

  searchContent(): void {
    const search = this.search()?.nativeElement.value;
    const searchContent = this.videoStreaming.searchBySameTitle(search!);

    this.content.emit(
                      [
                        {
                          params: (search) ? search : "Todos",
                          sectionTitle: (search) ? `Resultado: ${search}` : "Todos",
                          items: searchContent

                        }

                      ] satisfies Array<{ params: string } & TContent>

                    );

  }

}
