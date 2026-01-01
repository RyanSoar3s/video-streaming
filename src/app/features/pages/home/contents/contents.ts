import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { VideoStreaming } from '@core/services/video-streaming';
import { ContentModel } from '@features/shared/content-model/content-model';

@Component({
  selector: 'app-contents',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ContentModel

  ],
  templateUrl: './contents.html',
  styleUrl: './contents.css',
  host: {
    '[style.paddingLeft]': '(responsive.isXs() || responsive.isSm()) ? "0px": "150px"'

  }
})
export class Contents {

  protected readonly star = "assets/home/star.png";

  protected readonly faArrowRight = faArrowRight;
  protected readonly faArrowLeft = faArrowLeft;

  protected readonly responsive = inject(Responsive);
  protected readonly videoStreaming = inject(VideoStreaming);


}
