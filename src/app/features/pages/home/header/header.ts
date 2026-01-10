import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, viewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Responsive } from '@core/services/responsive';
import { VideoStreaming } from '@core/services/video-streaming';
import { Search } from '@features/shared/search/search';
import { TContent } from '@models/videoStreaming.model';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    Search

  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  protected readonly magnifyingGlass = "assets/home/magnifying-glass-";
  protected readonly user = "assets/home/user.png";
  protected readonly star = "assets/home/star.png";

  protected navOptions = [
                    { id: 0, content: "Recomendado", select: true },
                    { id: 1, content: "Mais Assistido", select: false },
                    { id: 2, content: "Lançamento", select: false },
                    { id: 3, content: this.magnifyingGlass, select: false }

                  ];

  private router = inject(Router);
  protected readonly responsive = inject(Responsive);
  protected readonly videoStreaming = inject(VideoStreaming);

  protected isShowSearchBar = false;
  protected headerContents: TContent["items"] | undefined = undefined;
  protected indexHeaderContent = 0;

  searchContainer = viewChild<ElementRef<HTMLDivElement>>("searchContainer");

  ngOnInit(): void {
    this.headerContents = this.videoStreaming.searchByTitles("Sherlock", "Homem Aranha no Aranhaverso", "Round 6");

  }

  @HostListener("window:resize")
  onWindowResize(): void {
    this.isShowSearchBar = false;
    this.indexHeaderContent = 0;
    this.navOptions.forEach((el, index) => {
      el.select = (index === 0) ? true : false;

    });

  }

  @HostListener("document:click", [ "$event" ])
  onDocumentClick(event: MouseEvent) {
      if (!this.isShowSearchBar || !this.searchContainer()) return;

      const clickedInsideSearch = this.searchContainer()!.nativeElement.contains(event.target as Node);

      if (!clickedInsideSearch) this.isShowSearchBar = false;

    }

  selectOption(id: number): void {
    this.navOptions.forEach((el, index) => {
      el.select = (index === id) ? true : false;

    });

    this.changeBanner(id);

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

  navigateByContentPage(title: string): void {
    const content = this.videoStreaming.searchByTitles(title);

    this.router.navigate([ "home", "content" ], {
      queryParams: {
        title: content[0].title

      },
      state: {
        access: true,
        content: [ { params: content[0].title, ...content } ]

      }

    });

  }

  private changeBanner(id: number): void {
    if (!this.headerContents) return;

    if (this.headerContents.length > id) this.indexHeaderContent = id;

  }

}
