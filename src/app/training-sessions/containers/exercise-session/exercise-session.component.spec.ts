import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSessionComponent } from './exercise-session.component';

describe('ExerciseSessionComponent', () => {
  let component: ExerciseSessionComponent;
  let fixture: ComponentFixture<ExerciseSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
