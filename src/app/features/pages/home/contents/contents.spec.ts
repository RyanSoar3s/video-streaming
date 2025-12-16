import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, beforeAll } from 'vitest';

import { Contents } from './contents';
import setupLocale from '@locale';

describe('Contents', () => {
  let component: Contents;
  let fixture: ComponentFixture<Contents>;

  beforeAll(() => {
    setupLocale();


  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Contents ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(Contents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
