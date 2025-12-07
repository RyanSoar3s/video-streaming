import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { Header } from './header/header';
import { Contents } from './contents/contents';
import { Responsive } from '@core/services/responsive';
import { CommonModule } from '@angular/common';
import { RequestApi } from '@core/services/request-api';
import { ProfileInfo } from '@core/services/profile-info';

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
export class Home implements OnInit {
  protected readonly responsive = inject(Responsive);
  private profileInfo = inject(ProfileInfo);
  private request = inject(RequestApi);

  ngOnInit(): void {
    this.request.profile().subscribe({
      next: (value) => {
        const data = { email: value.email, username: value.username };
        this.profileInfo.setValue(data as { email: string, username: string });
        console.log("Dados obtidos com sucesso")

      },
      error: (error) => {
        console.error(`Error: ${error}`)

      }

    });

  }

}
