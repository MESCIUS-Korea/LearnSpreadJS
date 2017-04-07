/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VariSaprkineComponent } from './vari-saprkine.component';

describe('VariSaprkineComponent', () => {
  let component: VariSaprkineComponent;
  let fixture: ComponentFixture<VariSaprkineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariSaprkineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariSaprkineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
