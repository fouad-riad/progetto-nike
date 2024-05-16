import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipNikeComponent } from './membership-nike.component';

describe('MembershipNikeComponent', () => {
  let component: MembershipNikeComponent;
  let fixture: ComponentFixture<MembershipNikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembershipNikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipNikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
