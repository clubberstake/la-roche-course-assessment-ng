import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSemesterModalComponent } from './mid-semester-modal.component';

describe('MidSemesterModalComponent', () => {
  let component: MidSemesterModalComponent;
  let fixture: ComponentFixture<MidSemesterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSemesterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSemesterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
