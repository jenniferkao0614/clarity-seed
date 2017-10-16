import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsDemoComponent } from './chartjs-demo.component';

describe('ChartjsDemoComponent', () => {
  let component: ChartjsDemoComponent;
  let fixture: ComponentFixture<ChartjsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
