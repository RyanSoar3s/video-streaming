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
  input = input<{
                  paddingRight: string,
                  borderRadius: string

  }>({ borderRadius: "8px", paddingRight: "40px" });
  button = input<{
    height: string,
    width: string,
    marginRight: string

  }>({ height: "28px", width: "28px", marginRight: "12px" });

  content = output<Array<{ params: string, info: TContent }>>();

  @HostListener("document:keydown", [ "$event" ])
  onClickEnter(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      const search = this.search();
      this.searchContent()
      if (search) search.nativeElement.value = "";

    };

  }

  searchContent(): void {
    const search = this.search();

    if (!search) return;

    const typed = search.nativeElement.value;

    const searchContent = this.videoStreaming.searchBySameTitle(typed!);
    if (search) search.nativeElement.value = "";

    this.content.emit(
                      [
                        {
                          params: (typed) ? typed : "Todos",
                          info: {
                            sectionTitle: (typed) ? `Resultado: ${typed}` : "Todos",
                            items: searchContent
                            
                          }

                        }

                      ] satisfies Array<{ params: string, info: TContent }>

                    );

  }

}
