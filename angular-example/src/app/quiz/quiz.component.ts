import { Component } from '@angular/core';
import {Question, QuizService} from "../quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  constructor(private quizService: QuizService) {}

  selectAnswer(question: Question, choice: string) {
    this.quizService.selectAnswer(question, choice);
  }

  get calculateScore() {
    return this.quizService.calculateScore();
  }

  get msgError() {
    return this.quizService.msgError;
  }

  get msgUserAnswers() {
    return this.quizService.userAnswers;
  }

  get questions() {
    return this.quizService.questions;
  }

}





