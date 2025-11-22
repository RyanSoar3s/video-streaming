import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2, viewChildren, ElementRef, Host, HostListener } from '@angular/core';
import type { Catalog, Categorie } from '../models/catalog';
import { Responsive } from '@core/services/responsive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-contents',
  imports: [
    CommonModule,
    FontAwesomeModule,
    DecimalPipe

  ],
  templateUrl: './contents.html',
  styleUrl: './contents.css'
})
export class Contents {
  protected readonly catalogs: Array<Catalog<Categorie> & { posX: number }> = [
    { sectionTitle: "Mais assistidos", items: [
      { title: "Os Vingadores", rating: 8.0, year: 2012, imageUrl: "assets/content/movies/Avengers.webp" },
      { title: "Eu Nunca", rating: 7.8, year: 2020, seasons: 4, imageUrl: "assets/content/series/never-have-i-ever.webp" },
      { title: "Coringa", rating: 8.3, year: 2019, imageUrl: "assets/content/movies/Joker.jpeg" },
      { title: "Kung Fu Panda", rating: 7.6, year: 2008, imageUrl: "assets/content/animations/kung-fu-panda.webp" },
      { title: "Interestelar", rating: 8.7, year: 2014, imageUrl: "assets/content/movies/Interestelar.jpeg" },

    ],
    posX: 0

    },
      { sectionTitle: "Filmes", items: [
        { title: "Os Vingadores", rating: 8.0, year: 2012, imageUrl: "assets/content/movies/Avengers.webp" },
        { title: "Interestelar", rating: 8.7, year: 2014, imageUrl: "assets/content/movies/Interestelar.jpeg" },
        { title: "O Maskara", rating: 7.0, year: 1994, imageUrl: "assets/content/movies/The-Mask.webp" },
        { title: "Shrek", rating: 7.9, year: 2001, imageUrl: "assets/content/movies/Shrek.jpeg" },
        { title: "Coringa", rating: 8.3, year: 2019, imageUrl: "assets/content/movies/Joker.jpeg" }

      ],
      posX: 0

    },
      { sectionTitle: "Séries", items: [
        { title: "Peaky Blinders", rating: 8.7, year: 2013, seasons: 6, imageUrl: "assets/content/series/peaky-blinders.webp" },
        { title: "Eu Nunca", rating: 7.8, year: 2020, seasons: 4, imageUrl: "assets/content/series/never-have-i-ever.webp" },
        { title: "Todo Mundo Odeia o Chris", rating: 7.6, year: 2005, seasons: 4, imageUrl: "assets/content/series/everybody-hates-chris.webp" },
        { title: "Stranger Things", rating: 8.6, year: 2016, seasons: 5, imageUrl: "assets/content/series/stranger-things.webp" },
        { title: "Eu, a Patroa e as Crianças", rating: 7.0, year: 2000, seasons: 5, imageUrl: "assets/content/series/my-wife&kids.webp" }

      ],
      posX: 0

    },
      { sectionTitle: "Animações", items: [
        { title: "Madagascar", rating: 6.9, year: 2005, imageUrl: "assets/content/animations/Madagascar.webp" },
        { title: "Kung Fu Panda", rating: 7.6, year: 2008, imageUrl: "assets/content/animations/kung-fu-panda.webp" },
        { title: "Ben 10", rating: 7.6, year: 2005, seasons: 3, imageUrl: "assets/content/animations/ben-10.webp" },
        { title: "Os Simpsons", rating: 8.6, year: 1989, seasons: 37, imageUrl: "assets/content/animations/the-simpsons.jpg" },
        { title: "Pica Pau", rating: 6.6, year: 1999, seasons: 6, imageUrl: "assets/content/animations/woody-woodpecker.jpg" }

      ],
      posX: 0

    }

  ];

  private sections = viewChildren<ElementRef<HTMLElement>>("section");

  protected readonly star = "assets/home/star.png";

  protected readonly faArrowRight = faArrowRight;
  protected readonly faArrowLeft = faArrowLeft;

  protected readonly responsive = inject(Responsive);
  private renderer = inject(Renderer2);

  navigateCarrousel(direction: "left" | "right", index: number, scrollLimitRate: number): void {
    const section = this.sections()[index].nativeElement;
    const limit = scrollLimitRate * 20;

    if (direction === "left") {
      if (this.catalogs[index].posX < 0) {
        this.catalogs[index].posX += limit;

       }

    }
    else {
      if (this.catalogs[index].posX > -limit) {
        this.catalogs[index].posX -= limit;

      }

    }

    this.renderer.setStyle(section, "transform", `translateX(${this.catalogs[index].posX}%)`);

  }

  @HostListener("window:resize")
  resetCarrouselsOnResize(): void {
    this.catalogs.forEach((catalog, index) => {
      catalog.posX = 0;
      const section = this.sections()[index].nativeElement;
      this.renderer.setStyle(section, "transform", "translateX(0%)");

    });

  }

}
