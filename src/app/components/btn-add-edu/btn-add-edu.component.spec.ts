import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddEduComponent } from './btn-add-edu.component';

describe('BtnAddEduComponent', () => {
  let component: BtnAddEduComponent;
  let fixture: ComponentFixture<BtnAddEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
