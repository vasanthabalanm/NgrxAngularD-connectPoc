import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBranchComponent } from './hotel-branch.component';

describe('HotelBranchComponent', () => {
  let component: HotelBranchComponent;
  let fixture: ComponentFixture<HotelBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
