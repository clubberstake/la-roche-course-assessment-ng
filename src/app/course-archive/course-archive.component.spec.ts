import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseArchiveComponent } from './course-archive.component';

describe('CourseArchiveComponent', () => {
  let component: CourseArchiveComponent;
  let fixture: ComponentFixture<CourseArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
