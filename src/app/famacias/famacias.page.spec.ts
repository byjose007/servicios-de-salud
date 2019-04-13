import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamaciasPage } from './famacias.page';

describe('FamaciasPage', () => {
  let component: FamaciasPage;
  let fixture: ComponentFixture<FamaciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamaciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamaciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
