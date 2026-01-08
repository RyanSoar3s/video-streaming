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

  searchByTitles(...titles: string[]): TContent["items"] {
    const vs = this.videoStreamingSignal();
    if (!vs || titles.length === 0) return [];

    const normalizedTitles = new Set(
      titles.map((t) => t.trim().toUpperCase())

    );

    return vs.All.items.filter((el) =>
      normalizedTitles.has(el.title.toUpperCase())

    );

  }

  searchBySameTitle(title: string): TContent["items"] {
    const vs = this.videoStreamingSignal();
    if (!vs) return [];

    const t = title.trim().toUpperCase();

    return vs.All.items.filter((el) =>
      el.title.toUpperCase().includes(t)

    );

  }

  searchByGenre(genre: string): TContent {
    const vs = this.videoStreamingSignal();

    if (!vs) return {} as TContent;

    const items = vs.All.items.filter((el) => el.genre.includes(genre));

    return {
      sectionTitle: `Gênero: ${genre}`,
      items

    } satisfies TContent;

  }

}
