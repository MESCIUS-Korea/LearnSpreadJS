/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Excel2010functionComponent } from './excel2010function.component';

describe('Excel2010functionComponent', () => {
  let component: Excel2010functionComponent;
  let fixture: ComponentFixture<Excel2010functionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Excel2010functionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Excel2010functionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
