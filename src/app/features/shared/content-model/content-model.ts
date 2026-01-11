import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, Renderer2, viewChildren } from '@angular/core';
import { faArrowRight, faArrowLeft, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Responsive } from '@core/services/responsive';
import { TContent } from '@models/videoStreaming.model';
import { VideoStreaming } from '@core/services/video-streaming';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-model',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './content-model.html',
  styleUrl: './content-model.css'
})

export class ContentModel {
  protected readonly faArrowRight = faArrowRight;
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faBoxOpen = faBoxOpen;
  protected readonly faSearch = faSearch;

  protected readonly star = "assets/home/star.png";

  private videoStreaming = inject(VideoStreaming);
  private router = inject(Router);
  protected readonly responsive = inject(Responsive);
  private renderer = inject(Renderer2);

  private items = viewChildren<ElementRef<HTMLElement>>("items");

  isCarousel = input(false);
  contents = input.required<Array<TContent & { scroll?: number }>>();

  canScroll(index: number): boolean {
    const container = this.items()[index]?.nativeElement;
    const parent = container?.parentElement;

    if (!container || !parent) return false;

    const children = container.children;
    if (children.length < 2) return false;

    const step =
      (children[1] as HTMLElement).offsetLeft -
      (children[0] as HTMLElement).offsetLeft;

    const visible = Math.round(parent.offsetWidth / step);

    return children.length > visible;

  }

  navigateCarousel(direction: "left" | "right", index: number): void {
    const content = this.contents()[index];
    const container = this.items()[index]?.nativeElement;
    const parent = container?.parentElement;

    if (!content || !container || !parent) return;

    if (content.scroll === undefined) content.scroll = 0;

    const children = container.children;
    if (children.length < 2) return;

    const step =
      (children[1] as HTMLElement).offsetLeft -
      (children[0] as HTMLElement).offsetLeft;

    const visible = Math.round(parent.offsetWidth / step);
    const maxPage = Math.max(0, children.length - visible);

    content.scroll = (direction === "right") ?
                    Math.min(content.scroll + visible, maxPage) :
                    Math.max(content.scroll - visible, 0);


    const scroll = content.scroll * step;

    this.renderer.setStyle(
      container,
      "transform",
      `translateX(-${scroll}px)`

    );

  }

  @HostListener("window:resize")
  resetCarrouselsOnResize(): void {
    this.contents().forEach((content, index) => {
      content.scroll = 0;
      const section = this.items()[index].nativeElement;
      this.renderer.setStyle(section, "transform", "translateX(0px)");

    });

  }

  navigateContent(title: string): void {
    const content = this.videoStreaming.searchByTitles(title);

    this.router.navigate([ "home", "content" ], {
      queryParams: {
        title: content[0].title

      },
      state: {
        access: true,
        content: [ { params: content[0].title, ...content } ]

      }

    });

  }

}
