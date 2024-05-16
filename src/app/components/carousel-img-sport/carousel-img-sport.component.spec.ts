import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImgSportComponent } from './carousel-img-sport.component';

describe('CarouselImgSportComponent', () => {
  let component: CarouselImgSportComponent;
  let fixture: ComponentFixture<CarouselImgSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselImgSportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselImgSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
