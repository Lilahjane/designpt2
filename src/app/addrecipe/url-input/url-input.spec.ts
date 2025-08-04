import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlInput } from './url-input';

describe('UrlInput', () => {
  let component: UrlInput;
  let fixture: ComponentFixture<UrlInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
