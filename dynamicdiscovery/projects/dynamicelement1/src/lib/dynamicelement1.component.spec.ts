import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicelement1Component } from './dynamicelement1.component';

describe('Dynamicelement1Component', () => {
  let component: Dynamicelement1Component;
  let fixture: ComponentFixture<Dynamicelement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicelement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicelement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
