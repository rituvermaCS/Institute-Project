import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedstudentsComponent } from './selectedstudents.component';

describe('SelectedstudentsComponent', () => {
  let component: SelectedstudentsComponent;
  let fixture: ComponentFixture<SelectedstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
