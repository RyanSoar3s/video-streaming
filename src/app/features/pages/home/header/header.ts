import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Responsive } from '@core/services/responsive';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule

  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly responsive = inject(Responsive);
  protected readonly magnifyingGlass = "assets/home/magnifying-glass-";
  protected readonly user = "assets/home/user.png";
  protected readonly star = "assets/home/star.png";

  protected navOptions = [
                    { id: 0, content: "Assistir agora", select: true },
                    { id: 1, content: "Categorias", select: false },
                    { id: 2, content: "Lançamentos", select: false },
                    { id: 3, content: this.magnifyingGlass, select: false }

                  ];

  selectOption(id: number): void {
    this.navOptions.forEach((el, index) => {
      el.select = (index === id) ? true : false;

    });

  }

}
