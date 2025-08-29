import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crochetdict } from './crochetdict';

describe('Crochetdict', () => {
  let component: Crochetdict;
  let fixture: ComponentFixture<Crochetdict>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crochetdict]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crochetdict);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
