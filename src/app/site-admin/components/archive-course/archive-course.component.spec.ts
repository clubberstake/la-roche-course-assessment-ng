import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCourseComponent } from './archive-course.component';

describe('ArchiveCourseComponent', () => {
  let component: ArchiveCourseComponent;
  let fixture: ComponentFixture<ArchiveCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
