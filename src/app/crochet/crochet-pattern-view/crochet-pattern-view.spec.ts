import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrochetPatternView } from './crochet-pattern-view';

describe('CrochetPatternView', () => {
  let component: CrochetPatternView;
  let fixture: ComponentFixture<CrochetPatternView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrochetPatternView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrochetPatternView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
