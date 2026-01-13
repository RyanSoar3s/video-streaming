import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModel } from './content-model';
import { TContent } from '@models/videoStreaming.model';

describe('ContentModel', () => {
  let component: ContentModel;
  let fixture: ComponentFixture<ContentModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentModel);
    fixture.componentRef.setInput("contents", [] as Array<TContent & { scroll?: number }>);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
