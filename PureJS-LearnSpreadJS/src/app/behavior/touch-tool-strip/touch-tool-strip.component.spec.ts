/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TouchToolStripComponent } from './touch-tool-strip.component';

describe('TouchToolStripComponent', () => {
  let component: TouchToolStripComponent;
  let fixture: ComponentFixture<TouchToolStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchToolStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchToolStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
