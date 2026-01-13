import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { Header } from './header'
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile/profile';
import { screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { VideoStreaming } from '@core/services/video-streaming';
import videoStreamingMock from '@mock/video-streaming.mock';
import { profileGuard } from '@core/guards/profile-guard';
import { contentAccessGuard } from '@core/guards/content-access-guard';
import { ContentPage } from '@features/shared/content-page/content-page';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Header,
        Profile

      ],
      providers: [
        { provide: VideoStreaming, useValue: videoStreamingMock },
        { provide: profileGuard, useValue: () => true },
        { provide: contentAccessGuard, useValue: () => true },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {}, queryParams: {} } }
        },
        provideRouter([
          {
            path: "home",
            children: [
              {
                path: "profile",
                component: Profile,
                outlet: "info"

              },
              {
                path: "content",
                component: ContentPage

              }

            ]

          }

        ])

      ]

    }).compileComponents();

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(Header);

    await fixture.whenStable();

  });
  it("should open the route profile", async () => {
    const routerLink = screen.getByTestId("profile-link");

    const user = userEvent.setup();

    await user.click(routerLink);

    expect(location.path()).toBe("/home/(info:profile)");

  })

  it("should show banner content", async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", { name: "Assistir" })

    );

    expect(location.path()).toBe("/home/content?title=Sherlock");

  });

})
