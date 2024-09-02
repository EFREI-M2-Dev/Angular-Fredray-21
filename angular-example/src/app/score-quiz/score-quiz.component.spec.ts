import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreQuizComponent } from './score-quiz.component';

describe('ScoreQuizComponent', () => {
  let component: ScoreQuizComponent;
  let fixture: ComponentFixture<ScoreQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreQuizComponent]
    });
    fixture = TestBed.createComponent(ScoreQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
