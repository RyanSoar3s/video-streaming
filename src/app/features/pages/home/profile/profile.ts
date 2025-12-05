import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink

  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected readonly pathImg = "assets/home/user-white.png";
  protected readonly faXmark = faXmark;
  protected readonly faPenToSquare = faPenToSquare;

  protected infos = [
    [ "usuário", "usuário 1" ],
    [ "email", "ryan@gmail.com" ],
    [ "senha", "*******" ]

  ];

}
