/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpreadpaintComponent } from './spreadpaint.component';

describe('SpreadpaintComponent', () => {
  let component: SpreadpaintComponent;
  let fixture: ComponentFixture<SpreadpaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadpaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
