import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Header } from './header/header/header';

@Component({
  selector: 'app-home',
  imports: [
    Navigation,
    Header

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
