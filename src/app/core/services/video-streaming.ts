import { computed, Injectable, signal } from '@angular/core';
import { TContent, TVideoStreaming } from '@models/videoStreaming.model';

@Injectable({
  providedIn: 'root',
})
export class VideoStreaming {
  private videoStreamingSignal = signal<TVideoStreaming | null>(null);
  public videoStreaming = computed(() => this.videoStreamingSignal());

  setVideoStreamingContent(content: TVideoStreaming): void {
    this.videoStreamingSignal.set(content);

  }

  searchByTitle(title: string): TContent["items"] | null {
    const vs = this.videoStreamingSignal();

    let content: TContent["items"] | null = (vs) ?
                                             vs.All.items.filter((el) => el.title.toUpperCase().includes(title.toUpperCase().trim())) : null;

    return content;

  }

}
