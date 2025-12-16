import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { Header } from './header'
import { ActivatedRoute } from '@angular/router';

describe('Header', () => {
  let component: Header
  let fixture: ComponentFixture<Header>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Header ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        }

      ]
    }).compileComponents()

    fixture = TestBed.createComponent(Header)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
