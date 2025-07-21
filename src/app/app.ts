import { Component } from '@angular/core';
import { Home } from '@features/pages/home/home';

@Component({
  selector: 'app-root',
  imports: [
    Home

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
