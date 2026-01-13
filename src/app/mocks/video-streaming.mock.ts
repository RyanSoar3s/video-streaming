import { signal } from "@angular/core";
import { TContent } from "@models/videoStreaming.model";
import { vi } from "vitest";

const items = [
  {
    type: [ "serie" ],
    id: 8,
    title: "Sherlock",
    description:
      "Uma releitura moderna das histórias de Sherlock Holmes, ambientada na Londres contemporânea, onde genialidade e arrogância caminham lado a lado.",
    year: 2010,
    genre: [ "Investigação", "Drama", "Crime", "Mistério" ],
    rating: 9.0,
    imagesUrl: [
      "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg",
      "https://images5.alphacoders.com/853/853867.jpg"

    ],
    video: {
      url: "https://www.youtube.com/embed/Eq3pF5OhlJk?si=lNXEB7rlwlW_bciy"

    },
    seasons: 4,
    episodes: 13

  }

] as TContent["items"];

const videoStreamingMock = {
  videoStreaming: signal({}),
  searchByTitles: vi.fn().mockReturnValue(items),
  searchBySameTitle: vi.fn().mockReturnValue(items)

};

export default videoStreamingMock;
