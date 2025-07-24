import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation } from './navigation';
import { By } from '@angular/platform-browser';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open menu', () => {
    const menu = fixture.debugElement.query(By.css("div.menu-img-icon"));

    menu.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(component.isOpen).toEqual(true);

  });

});
