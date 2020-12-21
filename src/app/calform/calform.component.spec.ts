import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalformComponent } from './calform.component';

describe('CalformComponent', () => {
  let component: CalformComponent;
  let fixture: ComponentFixture<CalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
