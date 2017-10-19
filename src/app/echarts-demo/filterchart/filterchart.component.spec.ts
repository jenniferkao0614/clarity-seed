import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterchartComponent } from './filterchart.component';

describe('FilterchartComponent', () => {
  let component: FilterchartComponent;
  let fixture: ComponentFixture<FilterchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
