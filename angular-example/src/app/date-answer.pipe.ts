import { Pipe, PipeTransform } from '@angular/core';
import {QuizService} from "./quiz.service";

@Pipe({
  name: 'dateAnswer'
})
export class DateAnswerPipe implements PipeTransform {
  constructor(private quizService: QuizService) {
  }

  transform(currentDate: Date | null, ...args: unknown[]): unknown {
    const dateStartQuiz = this.quizService.dateStartQuiz;
    if (!dateStartQuiz || !currentDate) {
      return '';
    }
    const diff = currentDate.getTime() - dateStartQuiz.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const miliseconds = diff % 1000;

    const hasHours = hours > 0;
    const hasMinutes = minutes > 0;
    const hasSeconds = seconds > 0;


    return `Réponse en ${hasHours ? `${hours}h ` : ''}${hasMinutes ? `${minutes}m ` : ''}${hasSeconds ? `${seconds}s ` : ''}${miliseconds}ms`;
  }
}
