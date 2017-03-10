/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabStripComponent } from './tab-strip.component';

describe('TabStripComponent', () => {
  let component: TabStripComponent;
  let fixture: ComponentFixture<TabStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
