import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinefeeComponent } from './onlinefee.component';

describe('OnlinefeeComponent', () => {
  let component: OnlinefeeComponent;
  let fixture: ComponentFixture<OnlinefeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinefeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
