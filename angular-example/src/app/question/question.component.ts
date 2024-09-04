import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../quiz.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() questionNumber!: number;
  @Input() msgUserAnswers!: { [id: number]: string };

  @Output() selectAnswerEvent = new EventEmitter<string>();

  now : Date |null = null;

  selectAnswer(choice: string) {
    this.selectAnswerEvent.emit(choice);
    this.now = new Date();
  }
}
