import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditSkillComponent } from './btn-edit-skill.component';

describe('BtnEditSkillComponent', () => {
  let component: BtnEditSkillComponent;
  let fixture: ComponentFixture<BtnEditSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
