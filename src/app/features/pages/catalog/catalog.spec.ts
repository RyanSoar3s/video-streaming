import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalog } from './catalog';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { historyStateCatalogMock } from '@mock/history-state.mock';
import { TContent } from '@models/videoStreaming.model';
import { of } from 'rxjs';
import setupLocale from '@locale';
import navigateMock from '@mock/navigate.mock';

describe('Catalog', () => {
  let component: Catalog;
  let fixture: ComponentFixture<Catalog>;
  let router: Router;
  const item = {
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

  } satisfies TContent["items"][number];

  const content =
              {
                params: "Sherlock",
                info: { sectionTitle: "Resultado: Sherlock", items: [ item ] }

              } satisfies { params: string, info: TContent };

  beforeAll(() => {
    setupLocale();

  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Catalog ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of(convertToParamMap({}))

          }

        },
        Router

      ]

    })
    .compileComponents();
    router = TestBed.inject(Router);

  });

  it("should show searched title", async () => {
    historyStateCatalogMock(content);

    fixture = TestBed.createComponent(Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();

    expect(component.contentSearched()).toEqual([ content ]);

  });

  it("should navigate with state when calling setContentSearched", async () => {
    const navigateSpy = navigateMock(router);

    fixture = TestBed.createComponent(Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();

    component.setContentSearched([ content ]);

    expect(navigateSpy).toHaveBeenCalledWith([], {
      queryParams: {
        search: "Sherlock"

      },
      state: {
        fromSearch: true,
        mode: "search",
        catalog: [ content ]

      }

    });

  });

});
