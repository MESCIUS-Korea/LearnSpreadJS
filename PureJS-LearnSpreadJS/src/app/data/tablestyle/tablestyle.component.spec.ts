/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablestyleComponent } from './tablestyle.component';

describe('TablestyleComponent', () => {
  let component: TablestyleComponent;
  let fixture: ComponentFixture<TablestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
