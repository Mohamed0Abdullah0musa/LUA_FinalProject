import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteYourProfileComponent } from './complete-your-profile.component';

describe('CompleteYourProfileComponent', () => {
  let component: CompleteYourProfileComponent;
  let fixture: ComponentFixture<CompleteYourProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteYourProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteYourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
