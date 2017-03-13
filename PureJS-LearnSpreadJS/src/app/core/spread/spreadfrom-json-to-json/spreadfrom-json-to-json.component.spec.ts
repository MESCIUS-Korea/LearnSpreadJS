/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpreadfromJSONToJSONComponent } from './spreadfrom-json-to-json.component';

describe('SpreadfromJSONToJSONComponent', () => {
  let component: SpreadfromJSONToJSONComponent;
  let fixture: ComponentFixture<SpreadfromJSONToJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadfromJSONToJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadfromJSONToJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
