import { Component } from '@angular/core';
import {Question, QuizService} from "../quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  constructor(private quizService: QuizService,private route: ActivatedRoute) {}

  selectAnswer(question: Question, choice: string) {
    this.quizService.selectAnswer(question, choice);
  }

  get calculateScore() {
    this.showResult = false;
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

  get currentUsername() {
    return this.quizService.currentUser?.username;
  }

  showResult = false;

}





