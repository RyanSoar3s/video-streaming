import { Component, inject } from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { VideoStreaming } from '@core/services/video-streaming';
import { ContentModel } from '@features/shared/content-model/content-model';

@Component({
  selector: 'app-catalog',
  imports: [
    ContentModel

  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
  host: {
    '[style.padding]': `(responsive.isSm() || responsive.isXs()) ? '0px 20px' : '0px 50px'`

  }

})
export class Catalog {
  protected readonly videoStreaming = inject(VideoStreaming);
  protected readonly responsive = inject(Responsive);

}
