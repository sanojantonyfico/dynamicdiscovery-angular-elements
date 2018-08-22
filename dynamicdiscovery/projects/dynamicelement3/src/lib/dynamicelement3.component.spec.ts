import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicelement3Component } from './dynamicelement3.component';

describe('Dynamicelement3Component', () => {
  let component: Dynamicelement3Component;
  let fixture: ComponentFixture<Dynamicelement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicelement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicelement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
