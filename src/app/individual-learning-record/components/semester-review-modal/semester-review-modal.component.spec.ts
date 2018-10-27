import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterReviewModalComponent } from './semester-review-modal.component';

describe('SemesterReviewModalComponent', () => {
  let component: SemesterReviewModalComponent;
  let fixture: ComponentFixture<SemesterReviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterReviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
