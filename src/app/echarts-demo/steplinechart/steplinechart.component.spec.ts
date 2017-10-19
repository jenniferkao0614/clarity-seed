import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteplinechartComponent } from './steplinechart.component';

describe('SteplinechartComponent', () => {
  let component: SteplinechartComponent;
  let fixture: ComponentFixture<SteplinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteplinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteplinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
