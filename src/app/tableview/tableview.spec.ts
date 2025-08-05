import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tableview } from './tableview';

describe('Tableview', () => {
  let component: Tableview;
  let fixture: ComponentFixture<Tableview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tableview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tableview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
