import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { Header } from './header'
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile/profile';
import { screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Header,
        Profile

      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        },
        Router,
        Location,
        provideRouter([
          {
            path: "home",
              children: [
                {
                  path: "profile",
                  component: Profile

                }

            ]

          }

        ])

      ]
    }).compileComponents();

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  })

  it('should open the route profile', async () => {
    const routerLink = screen.getByTestId("profile-link");

    const user = userEvent.setup();

    await user.click(routerLink);

    expect(location.path()).toBe("/home/profile");

  })
})
