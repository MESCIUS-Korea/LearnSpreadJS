/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SheeteventsComponent } from './sheetevents.component';

describe('SheeteventsComponent', () => {
  let component: SheeteventsComponent;
  let fixture: ComponentFixture<SheeteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheeteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheeteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
