import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, beforeAll } from 'vitest';

import { Home } from './home';
import { ActivatedRoute } from '@angular/router';
import setupLocale from "@locale"

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;


  beforeAll(() => {
    setupLocale();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Home ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        }

      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
