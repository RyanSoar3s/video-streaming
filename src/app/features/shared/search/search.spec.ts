import { ComponentFixture, TestBed } from '@angular/core/testing';

import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { Search } from './search';
import { TContent } from '@models/videoStreaming.model';
import { VideoStreaming } from '@core/services/video-streaming';
import videoStreamingMock from '@mock/video-streaming.mock';

describe('Search', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Search ],
      providers: [
        { provide: VideoStreaming, useValue: videoStreamingMock }

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search);
    fixture.componentRef.setInput("height", "30px");
    fixture.componentRef.setInput("width", "80px");

    component = fixture.componentInstance;
    await fixture.whenStable();

  });

  it("should content search", async () => {
    const input = screen.getByRole("textbox", { name: "search" });
    const button = screen.getByRole("button", { name: "button-search" });

    const spy = vi.fn();

    component.content.subscribe(spy);

    const user = userEvent.setup();

    await user.click(
      input

    );

    await user.type(
      input,
      "Sherlock"

    );

    await user.click(
      button

    );

    expect(spy).toHaveBeenCalledWith([
      {
        params: "Sherlock",
        info: {
          sectionTitle: "Resultado: Sherlock",
          items

        }

      }

    ] satisfies Array<{ params: string, info: TContent }>);

  });

});
