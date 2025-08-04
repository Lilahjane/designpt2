import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecipe } from './display-recipe';

describe('DisplayRecipe', () => {
  let component: DisplayRecipe;
  let fixture: ComponentFixture<DisplayRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
