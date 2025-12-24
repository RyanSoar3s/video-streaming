import { TestBed } from '@angular/core/testing';

import { VideoStreaming } from './video-streaming';

describe('VideoStreaming', () => {
  let service: VideoStreaming;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoStreaming);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
