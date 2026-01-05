import { computed, Injectable, signal } from '@angular/core';
import { TContent, TVideoStreaming } from '@models/videoStreaming.model';

@Injectable({
  providedIn: 'root',
})
export class VideoStreaming {
  private videoStreamingSignal = signal<TVideoStreaming | null>(null);
  public videoStreaming = computed(() => this.videoStreamingSignal());

  public allFiltered = computed(() => {
    const vs = this.videoStreamingSignal();
    if (!vs) return null;

    return [
      this.processSection(vs.MostWatched, "rating"),
      this.processSection(vs.Releases, "year"),
      this.processSection(vs.Movies),
      this.processSection(vs.Series),
      this.processSection(vs.Animations)

    ];

  });

  private processSection(section: TContent, sortKey?: string, amount = 15): TContent {
    let items = [ ...section.items ];

    if (sortKey === "rating") items.sort((a, b) => b.rating - a.rating);
    if (sortKey === "year") items.sort((a, b) => b.year - a.year);

    return {
      sectionTitle: section.sectionTitle,
      items: items.slice(0, amount)

    } satisfies TContent;

  }

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
