import { Component, inject, OnInit } from '@angular/core';
import { responseError } from '@core/models/responseError.model';
import { RequestApi } from '@core/services/request-api';
import { VideoStreaming } from '@core/services/video-streaming';
import { ContentModel } from '@features/shared/content-model/content-model';

@Component({
  selector: 'app-catalog',
  imports: [
    ContentModel

  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  private request = inject(RequestApi);
  protected readonly videoStreaming = inject(VideoStreaming);

  ngOnInit(): void {
    this.request.catalog().subscribe({
      next: () => console.log("Catálogo foi carregado"),
      error: (error: responseError) => console.error(`Error: ${error.error.message}`)

    });

  }

}
