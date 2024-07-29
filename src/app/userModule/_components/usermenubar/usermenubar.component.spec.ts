import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenubarComponent } from './usermenubar.component';

describe('UsermenubarComponent', () => {
  let component: UsermenubarComponent;
  let fixture: ComponentFixture<UsermenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsermenubarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsermenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
