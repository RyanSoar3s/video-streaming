import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, inject, input, Renderer2, viewChildren } from '@angular/core';
import { faArrowRight, faArrowLeft, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Responsive } from '@core/services/responsive';
import { TContent } from '@models/videoStreaming.model';

@Component({
  selector: 'app-content-model',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './content-model.html',
  styleUrl: './content-model.css',
})
export class ContentModel implements OnInit {
  protected readonly faArrowRight = faArrowRight;
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faBoxOpen = faBoxOpen;
  protected readonly faSearch = faSearch;

  protected readonly star = "assets/home/star.png";

  protected readonly responsive = inject(Responsive);
  private renderer = inject(Renderer2);

  private items = viewChildren<ElementRef<HTMLElement>>("items");

  isCarousel = input(false);
  contents = input.required<Array<TContent & { posX?: number }>>();

  ngOnInit(): void {
    if (this.isCarousel()) this.contents().forEach((c) => c.posX = 0);

  }

  navigateCarrousel(direction: "left" | "right", index: number, scrollLimitRate: number): void {
    const currentContent = this.contents()[index];
    if (!currentContent) return;

    const items = this.items()[index].nativeElement;
    const limit = scrollLimitRate * 20;

    if (direction === "left") {
      if ((currentContent.posX ?? 0) < 0) {
        currentContent.posX! += limit;

      }

    }
    else {
      if ((currentContent.posX ?? 0) > -limit) {
        currentContent.posX! -= limit;

      }

    }

    this.renderer.setStyle(items, "transform", `translateX(${currentContent.posX}%)`);

  }

}
