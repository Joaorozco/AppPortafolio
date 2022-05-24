import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRedesSocialesComponent } from './button-redes-sociales.component';

describe('ButtonRedesSocialesComponent', () => {
  let component: ButtonRedesSocialesComponent;
  let fixture: ComponentFixture<ButtonRedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRedesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
