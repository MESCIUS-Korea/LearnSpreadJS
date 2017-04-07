/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HbarVbarComponent } from './hbar-vbar.component';

describe('HbarVbarComponent', () => {
  let component: HbarVbarComponent;
  let fixture: ComponentFixture<HbarVbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbarVbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbarVbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
