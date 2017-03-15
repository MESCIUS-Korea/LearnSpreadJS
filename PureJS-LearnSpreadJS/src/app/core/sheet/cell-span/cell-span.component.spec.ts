/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CellSpanComponent } from './cell-span.component';

describe('CellSpanComponent', () => {
  let component: CellSpanComponent;
  let fixture: ComponentFixture<CellSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
