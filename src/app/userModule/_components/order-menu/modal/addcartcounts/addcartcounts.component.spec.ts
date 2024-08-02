import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartcountsComponent } from './addcartcounts.component';

describe('AddcartcountsComponent', () => {
  let component: AddcartcountsComponent;
  let fixture: ComponentFixture<AddcartcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcartcountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcartcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
