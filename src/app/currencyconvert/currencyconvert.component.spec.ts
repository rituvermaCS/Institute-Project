import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconvertComponent } from './currencyconvert.component';

describe('CurrencyconvertComponent', () => {
  let component: CurrencyconvertComponent;
  let fixture: ComponentFixture<CurrencyconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
