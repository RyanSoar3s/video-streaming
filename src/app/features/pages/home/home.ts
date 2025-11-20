import { Component, inject } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Header } from './header/header';
import { Contents } from './contents/contents';
import { Responsive } from '@core/services/responsive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Navigation,
    Header,
    Contents

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly responsive = inject(Responsive);

}
