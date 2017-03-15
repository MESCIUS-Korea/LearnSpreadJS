/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetsetdataComponent } from './getsetdata.component';

describe('GetsetdataComponent', () => {
  let component: GetsetdataComponent;
  let fixture: ComponentFixture<GetsetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
