import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent1Component } from './first-component1.component';

describe('FirstComponent1Component', () => {
  let component: FirstComponent1Component;
  let fixture: ComponentFixture<FirstComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
