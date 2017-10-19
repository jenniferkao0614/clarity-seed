import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstackchartComponent } from './estackchart.component';

describe('EstackchartComponent', () => {
  let component: EstackchartComponent;
  let fixture: ComponentFixture<EstackchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstackchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstackchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
