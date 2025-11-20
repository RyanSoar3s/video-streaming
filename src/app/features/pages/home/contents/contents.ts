import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import type { Catalog } from '../models/catalog';
import { Responsive } from '@core/services/responsive';

@Component({
  selector: 'app-contents',
  imports: [
    CommonModule

  ],
  templateUrl: './contents.html',
  styleUrl: './contents.css'
})
export class Contents {
  protected catalogs: Array<Catalog> = [
    {
      "all": {
        items: [
          { title: "Mais assistidos", content: [
            { contentTitle: "Item1", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item2", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item3", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item4", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item5", star: 5, year: 2020, season: 2 }

          ] },
          { title: "Filmes",content: [
            { contentTitle: "Item1", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item2", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item3", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item4", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item5", star: 5, year: 2020, season: 2 }

          ] },
          { title: "Séries", content: [
            { contentTitle: "Item1", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item2", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item3", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item4", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item5", star: 5, year: 2020, season: 2 }

          ] },
          { title: "Animações", content: [
            { contentTitle: "Item1", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item2", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item3", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item4", star: 5, year: 2020, season: 2 },
            { contentTitle: "Item5", star: 5, year: 2020, season: 2 }

          ] }

        ]

      }

    }

  ];
  protected catalog: Catalog[keyof Catalog] = this.catalogs[0]["all"];
  protected readonly star = "assets/home/star.png";

  protected readonly responsive = inject(Responsive);

}
