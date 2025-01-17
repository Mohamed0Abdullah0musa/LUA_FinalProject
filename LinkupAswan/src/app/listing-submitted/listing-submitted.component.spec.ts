import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSubmittedComponent } from './listing-submitted.component';

describe('ListingSubmittedComponent', () => {
  let component: ListingSubmittedComponent;
  let fixture: ComponentFixture<ListingSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingSubmittedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
