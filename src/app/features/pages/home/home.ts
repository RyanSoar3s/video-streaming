import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Navigation,
    Header,
    RouterModule

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
