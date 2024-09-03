import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';


export interface  Question {
  id: number;
  question: string;
  choices: string[];
  answer: string;
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private router: Router, private http: HttpClient) {
    this.getQuestions().subscribe((data: Question[]) => {
      this.questions = this.shuffleArray(data);
      this.questions.forEach((question) => {
        question.choices = this.shuffleArray(question.choices);
      });
    });
  }

  questions : Question[] = [];
  userAnswers: { [id: number]: string } = {};
  score = 0;
  msgError : string | null = null;
  currentUsername: string | null = null;

  shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

  getQuestions = (): Observable<Question[]> => {
    return this.http.get<Question[]>('http://localhost:3000/questions');
  }

  selectAnswer =(question: Question, choice: string) =>{
    this.userAnswers[question.id] = choice;
  }

  calculateScore = async () => {
    if (Object.keys(this.userAnswers).length < this.questions.length) {
      const missingCount = this.questions.length - Object.keys(this.userAnswers).length;
      this.msgError = `⚠️ Complétez toutes les questions pour voir votre score. ⚠️ \n ${missingCount} questions manquantes.`;
      return;
    }

    this.score = 0;
    this.questions.forEach((question) => {
      if (question.answer === this.userAnswers[question.id]) {
        this.score++;
      }
    });

    this.msgError = null;

    await this.router.navigate(['/quiz/score']);
  }

  resetData = () => {
    this.score = 0;
    this.userAnswers = {};
    this.msgError = null;
  }
}
