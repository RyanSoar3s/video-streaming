import { CommonModule } from '@angular/common';
import { Component, computed, effect, ElementRef, inject, Renderer2, signal, viewChild } from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartSolid, faPlus, faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { toSignal } from '@angular/core/rxjs-interop';
import { TContent } from '@models/videoStreaming.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-page',
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './content-page.html',
  styleUrl: './content-page.css',
  host: {
    '[style.paddingLeft]': '(responsive.isXs() || responsive.isSm()) ? "0px": "150px"'

  }
})
export class ContentPage {
  private renderer = inject(Renderer2);
  private route = inject(ActivatedRoute);
  protected readonly responsive = inject(Responsive);

  protected readonly faHeartSolid   = faHeartSolid;
  protected readonly faHeartRegular = faHeartRegular;
  protected readonly faPlus         = faPlus;
  protected readonly faPlay         = faPlay;
  protected readonly faCheck        = faCheck;

  protected clickedFaHeart = false;
  protected clickedFaPlus = false;
  public playButtonDisabled = false;

  protected readonly icon = "favicon.ico";
  protected readonly star = "assets/home/star.png";

  public showMore = false;

  private player = viewChild<ElementRef<HTMLDivElement>>("player");
  private description = viewChild<ElementRef<HTMLParagraphElement>>("description");

  private navState = signal<{
    access?: boolean;
    content?: Array<{ params: string, info: TContent["items"] }>;

  }>({});

  private queryParams = toSignal(this.route.queryParamMap);

  public content = computed(() => {
    return this.navState().content ?? [];

  });

  constructor(){
    effect(() => {
      this.queryParams();
      this.navState.set(history.state); console.log(this.content())
      this.playButtonDisabled = false;

      const player = this.player();

      if (!player) return;

      const iframe = player.nativeElement.children[0];

      if (!iframe) return;

      this.renderer.removeChild(player.nativeElement, iframe)

    });

  }

  showDescription(): void {
    this.renderer.removeClass(this.description()?.nativeElement, "line-clamp-2");

    this.showMore = true;

  }

  openVideo(): void {
    const player = this.player();

    if (!player) return;

    const c = this.content()[0].info[0];

    this.playButtonDisabled = true;

    const iframe = this.renderer.createElement("iframe") as HTMLIFrameElement;

    this.renderer.setAttribute(iframe, "title", c.title);
    this.renderer.setAttribute(iframe, "src", c.video.url);
    this.renderer.setAttribute(iframe, "frameborder", "0");
    this.renderer.setAttribute(
      iframe,
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

    );
    this.renderer.setAttribute(iframe, "referrerpolicy", "strict-origin-when-cross-origin");
    this.renderer.setAttribute(iframe, "allowfullscreen", "");

    this.renderer.addClass(iframe, "iframe");

    this.renderer.appendChild(player.nativeElement, iframe);

  }

}
