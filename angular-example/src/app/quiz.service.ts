import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

export interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: string;
}


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private router: Router) { }

  shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

  questions: Question[] = [
    {
      id: 1,
      question: 'Quel girl band a sorti la chanson "DDU-DU DDU-DU" ?',
      choices: ['BLACKPINK', 'TWICE', 'Red Velvet', 'ITZY'],
      answer: 'BLACKPINK'
    },
    {
      id: 2,
      question: 'Quel groupe féminin a fait ses débuts avec la chanson "BOOMBAYAH" ?',
      choices: ['BLACKPINK', 'MAMAMOO', 'ITZY', 'GFRIEND'],
      answer: 'BLACKPINK'
    },
    {
      id: 3,
      question: 'Quelle chanson a permis à TWICE de remporter leur premier "Daesang" (grand prix) ?',
      choices: ['Cheer Up', 'TT', 'Likey', 'Signal'],
      answer: 'Cheer Up'
    },
    {
      id: 4,
      question: 'Quel groupe féminin est surnommé "les Monster Rookies" après leur succès fulgurant en 2019 ?',
      choices: ['ITZY', 'EVERGLOW', 'aespa', 'IZ*ONE'],
      answer: 'ITZY'
    },
    {
      id: 5,
      question: 'Quelle membre de BLACKPINK a sorti un album solo intitulé "R" ?',
      choices: ['Rosé', 'Jennie', 'Lisa', 'Jisoo'],
      answer: 'Rosé'
    },
    {
      id: 6,
      question: 'Quel groupe féminin est connu pour son concept de contes de fées et de rêves ?',
      choices: ['LOONA', 'GFRIEND', 'Red Velvet', 'Dreamcatcher'],
      answer: 'Red Velvet'
    },
    {
      id: 7,
      question: 'Quel groupe féminin a collaboré avec Selena Gomez sur la chanson "Ice Cream" ?',
      choices: ['BLACKPINK', 'Red Velvet', 'TWICE', 'ITZY'],
      answer: 'BLACKPINK'
    },
    {
      id: 8,
      question: 'Quel groupe féminin est célèbre pour ses concepts variés, de "Red Flavor" à "Psycho" ?',
      choices: ['Red Velvet', 'Apink', 'MAMAMOO', '(G)I-DLE'],
      answer: 'Red Velvet'
    },
    {
      id: 9,
      question: 'Quel girl band a remporté "Queendom" avec sa performance spectaculaire ?',
      choices: ['MAMAMOO', '(G)I-DLE', 'AOA', 'Lovelyz'],
      answer: 'MAMAMOO'
    },
    {
      id: 10,
      question: 'Quel groupe féminin a été formé à partir de l\'émission de télé-réalité "Produce 48" ?',
      choices: ['IZ*ONE', 'fromis_9', 'WJSN', 'Cherry Bullet'],
      answer: 'IZ*ONE'
    }
  ];
  userAnswers: { [id: number]: string } = {};
  score = 0;
  msgError : string | null = null;

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
