import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarareachartComponent } from './polarareachart.component';

describe('PolarareachartComponent', () => {
  let component: PolarareachartComponent;
  let fixture: ComponentFixture<PolarareachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarareachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
