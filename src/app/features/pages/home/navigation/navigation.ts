import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Responsive } from '@core/services/responsive';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    RouterLink

  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  protected readonly bars = "assets/navigation/bars.png";
  protected readonly xMark = "assets/navigation/x-mark.png";
  protected readonly magnifyingGlass = "assets/home/magnifying-glass-white.png";

  protected readonly icons = [
    { id: 0, name: "Início",      icon: "assets/navigation/house.png", link: "" },
    { id: 1, name: "Catálogo",    icon: "assets/navigation/tv.png",    link: "catalog" },
    { id: 2, name: "Mais vistos", icon: "assets/navigation/fire.png",  link: "" },
    { id: 3, name: "Favoritos",   icon: "assets/navigation/star.png",  link: "" },
    { id: 4, name: "Biblioteca",  icon: "assets/navigation/layer.png", link: "" }

  ];

  protected readonly mostWatchedContent = [
    { id: 0, name: "serie 1" },
    { id: 1, name: "serie 2" },
    { id: 2, name: "serie 3" },
    { id: 3, name: "serie 4" },
    { id: 4, name: "serie 5" }

  ];

  protected readonly trendingContent = [
    { id: 0, name: "Ação", color: "bg-blue-500" },
    { id: 1, name: "Aventura", color: "bg-orange-500" },
    { id: 2, name: "Comédia", color: "bg-red-500" },
    { id: 3, name: "Terror", color: "bg-yellow-500" },
    { id: 4, name: "Fantasia", color: "bg-green-500" },
    { id: 5, name: "Animação", color: "bg-pink-500" }

  ];

  protected readonly responsive = inject(Responsive);
  public isOpen = false;

}
