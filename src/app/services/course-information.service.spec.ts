import { TestBed } from '@angular/core/testing';

import { CourseInformationService } from './course-information.service';

describe('CourseInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseInformationService = TestBed.get(CourseInformationService);
    expect(service).toBeTruthy();
  });
});
