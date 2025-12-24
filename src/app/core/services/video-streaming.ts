import { computed, Injectable, signal } from '@angular/core';
import { TVideoStreaming } from '@models/videoStreaming.model';

@Injectable({
  providedIn: 'root',
})
export class VideoStreaming {
  private videoStreamingSignal = signal<TVideoStreaming | null>(null);
  public videoStreaming = computed(() => this.videoStreamingSignal());

  setVideoStreamingContent(content: TVideoStreaming): void {
    this.videoStreamingSignal.set(content);

  }

}
