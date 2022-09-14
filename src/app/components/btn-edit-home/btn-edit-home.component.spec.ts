import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditHomeComponent } from './btn-edit-home.component';

describe('BtnEditHomeComponent', () => {
  let component: BtnEditHomeComponent;
  let fixture: ComponentFixture<BtnEditHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
