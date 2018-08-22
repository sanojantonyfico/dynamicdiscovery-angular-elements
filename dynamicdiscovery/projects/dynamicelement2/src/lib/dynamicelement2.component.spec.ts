import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicelement2Component } from './dynamicelement2.component';

describe('Dynamicelement2Component', () => {
  let component: Dynamicelement2Component;
  let fixture: ComponentFixture<Dynamicelement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicelement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicelement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
