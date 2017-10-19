import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxchartComponent } from './boxchart.component';

describe('BoxchartComponent', () => {
  let component: BoxchartComponent;
  let fixture: ComponentFixture<BoxchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
