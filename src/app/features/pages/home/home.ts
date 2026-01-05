import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Navigation,
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

}
