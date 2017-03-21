/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SheetpaintComponent } from './sheetpaint.component';

describe('SheetpaintComponent', () => {
  let component: SheetpaintComponent;
  let fixture: ComponentFixture<SheetpaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetpaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
