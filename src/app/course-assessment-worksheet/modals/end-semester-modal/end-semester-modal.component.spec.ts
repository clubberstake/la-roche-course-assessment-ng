import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSemesterModalComponent } from './end-semester-modal.component';

describe('EndSemesterModalComponent', () => {
  let component: EndSemesterModalComponent;
  let fixture: ComponentFixture<EndSemesterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndSemesterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSemesterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
