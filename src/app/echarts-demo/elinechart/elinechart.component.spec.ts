import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElinechartComponent } from './elinechart.component';

describe('ElinechartComponent', () => {
  let component: ElinechartComponent;
  let fixture: ComponentFixture<ElinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
