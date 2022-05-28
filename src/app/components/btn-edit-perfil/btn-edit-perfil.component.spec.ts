import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditPerfilComponent } from './btn-edit-perfil.component';

describe('BtnEditPerfilComponent', () => {
  let component: BtnEditPerfilComponent;
  let fixture: ComponentFixture<BtnEditPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
