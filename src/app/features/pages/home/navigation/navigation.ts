import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Responsive } from '@core/services/responsive';
import { VideoStreaming } from '@core/services/video-streaming';
import { TVideoStreaming, TContent } from '@models/videoStreaming.model';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    RouterLink

  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation implements OnInit {
  protected readonly videoStreaming = inject(VideoStreaming);

  protected readonly bars = "assets/navigation/bars.png";
  protected readonly xMark = "assets/navigation/x-mark.png";
  protected readonly magnifyingGlass = "assets/home/magnifying-glass-white.png";

  protected readonly icons = [
    { id: 0, name: "Início",      icon: "assets/navigation/house.png", option: [ "", "" ],                        link: "" },
    { id: 1, name: "Catálogo",    icon: "assets/navigation/tv.png",    option: [ "Todos", "All" ],                link: "catalog" },
    { id: 2, name: "Mais vistos", icon: "assets/navigation/fire.png",  option: [ "Mais Vistos", "MostWatched" ],  link: "catalog" },
    { id: 3, name: "Favoritos",   icon: "assets/navigation/star.png",  option: [ "", "" ],                        link: "" },
    { id: 4, name: "Biblioteca",  icon: "assets/navigation/layer.png", option: [ "", "" ],                        link: "" }

  ];

  protected mostWatchedContent!: TContent["items"];

  protected readonly trendingContent = [
    { id: 0, name: "Ação",              color: "bg-red-600" },
    { id: 1, name: "Aventura",          color: "bg-emerald-600" },
    { id: 2, name: "Comédia",           color: "bg-yellow-400" },
    { id: 3, name: "Terror",            color: "bg-gray-600" },
    { id: 4, name: "Ficção Científica", color: "bg-purple-600" },
    { id: 5, name: "Animação",          color: "bg-sky-400" }

  ];

  protected readonly responsive = inject(Responsive);
  public isOpen = false;

  ngOnInit(): void {
    this.mostWatchedContent = this.videoStreaming.searchByTitles("Breaking Bad", "Eu Nunca", "Round 6", "Sherlock", "Peaky Blinders")

  }

  getCatalog(option: Array<string>): Array<{ param: string } & TContent> {
    const vs = this.videoStreaming.videoStreaming();
    const key = option[1] as keyof TVideoStreaming;
    const content = { param: option[0], ...vs![key] };

    return [ content ] satisfies Array<{ param: string } & TContent>;

  }

  navigateByContentSearched(content: Array<{ params: string } & TContent>): void {
    this.router.navigate([ "/home", "catalog" ], {
      queryParams: {
        search: content[0].params

      },
      state: {
        fromSearch: true,
        mode: "search",
        catalog: content

      }

    });

  }

  navigateByGenre(params: string): void {
    const content = [ { params, ...this.videoStreaming.searchByGenre(params) } ];

    this.navigateByContentSearched(content);

  }

}
