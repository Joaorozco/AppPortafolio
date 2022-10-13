import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddSkillComponent } from './btn-add-skill.component';

describe('BtnAddSkillComponent', () => {
  let component: BtnAddSkillComponent;
  let fixture: ComponentFixture<BtnAddSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
