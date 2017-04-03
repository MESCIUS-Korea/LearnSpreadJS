/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasictableComponent } from './basictable.component';

describe('BasictableComponent', () => {
  let component: BasictableComponent;
  let fixture: ComponentFixture<BasictableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasictableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
