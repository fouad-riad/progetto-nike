import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltreCategorieComponent } from './altre-categorie.component';

describe('AltreCategorieComponent', () => {
  let component: AltreCategorieComponent;
  let fixture: ComponentFixture<AltreCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltreCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltreCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
