import { Component } from '@angular/core';
import {QuizService} from "../quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private quizService: QuizService, private router: Router) {}

  checkIfLoggedIn() {
    return window.localStorage.getItem('user') !== null;
  }

  async logout() {
    this.quizService.currentUser = null;
    window.localStorage.removeItem('user');
    await this.router.navigate(['/']);
  }

  get currentUser() {
    return this.quizService.currentUser
  }

}
