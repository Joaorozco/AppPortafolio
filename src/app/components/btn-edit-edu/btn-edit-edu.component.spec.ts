import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditEduComponent } from './btn-edit-edu.component';

describe('BtnEditEduComponent', () => {
  let component: BtnEditEduComponent;
  let fixture: ComponentFixture<BtnEditEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
