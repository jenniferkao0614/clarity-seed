import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsDemoComponent } from './echarts-demo.component';

describe('EchartsDemoComponent', () => {
  let component: EchartsDemoComponent;
  let fixture: ComponentFixture<EchartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
