import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalComponent } from './view-cal.component';

describe('ViewCalComponent', () => {
  let component: ViewCalComponent;
  let fixture: ComponentFixture<ViewCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
