import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhotelmodalComponent } from './addhotelmodal.component';

describe('AddhotelmodalComponent', () => {
  let component: AddhotelmodalComponent;
  let fixture: ComponentFixture<AddhotelmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddhotelmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddhotelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
