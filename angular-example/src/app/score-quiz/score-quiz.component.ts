import { Component } from '@angular/core';
import {QuizService} from "../quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-score-quiz',
  templateUrl: './score-quiz.component.html',
  styleUrls: ['./score-quiz.component.scss']
})
export class ScoreQuizComponent {

  constructor(private router: Router,private quizService: QuizService) {}

  ngOnInit() {
    // check if user has not answered all questions
    if (Object.keys(this.quizService.userAnswers).length < this.quizService.questions.length) {
      this.router.navigate(['/quiz']).then(r => r);
    }
  }

  get resetData() {
    return this.quizService.resetData();
  }

  get score() {
    return this.quizService.score;
  }

  get questionLength() {
    return this.quizService.questions.length;
  }
}
