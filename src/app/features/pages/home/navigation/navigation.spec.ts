import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { Navigation } from './navigation';
import { ActivatedRoute } from '@angular/router';
import { VideoStreaming } from '@core/services/video-streaming';
import videoStreamingMock from '@mock/video-streaming.mock';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;
  let videoStreaming: VideoStreaming;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Navigation ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        },
        {
          provide: VideoStreaming,
          useValue: videoStreamingMock

        }

      ]
    })
    .compileComponents();

    videoStreaming = TestBed.inject(VideoStreaming);

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should open menu", async () => {
    expect(component.isOpen).toBeFalsy();

    const user = userEvent.setup();

    await user.click(
      screen.getByTestId("menu")

    );

    expect(component.isOpen).toBeTruthy();

  });

});
