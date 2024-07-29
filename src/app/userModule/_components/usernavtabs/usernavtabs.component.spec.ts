import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernavtabsComponent } from './usernavtabs.component';

describe('UsernavtabsComponent', () => {
  let component: UsernavtabsComponent;
  let fixture: ComponentFixture<UsernavtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernavtabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernavtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
