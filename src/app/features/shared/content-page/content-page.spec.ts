import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ContentPage } from './content-page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { historyStateContentPageMock } from '@mock/history-state.mock';
import { TContent } from '@models/videoStreaming.model';

describe('ContentPage', () => {
  let component: ContentPage;
  let fixture: ComponentFixture<ContentPage>;

  const item = [ {
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

  } ] as TContent["items"];

  const content = {
    params: "Sherlock",
    info: item

  } satisfies { params: string, info: TContent["items"] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentPage ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(convertToParamMap({}))

          }

        },

      ]
    })

  });

  it("should show content page", async () => {
    historyStateContentPageMock(content);

    fixture = TestBed.createComponent(ContentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();

    expect(component.content()).toEqual([ content ]);

  });

  it("should show full description", async () => {
    fixture = TestBed.createComponent(ContentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();

    expect(component.showMore).toBeFalsy();

    const user = userEvent.setup();

    await user.click(
      screen.getByTestId("showMore")

    );

    expect(component.showMore).toBeTruthy();

  });

  it("should show iframe", async () => {
    fixture = TestBed.createComponent(ContentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();

    expect(component.playButtonDisabled).toBeFalsy();

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", { name: "Assistir" })

    );

    const player = screen.getByTestId("player");
    const iframe = player.children[0];

    expect(iframe).toBeTruthy();
    expect(component.playButtonDisabled).toBeTruthy();

  });

});
