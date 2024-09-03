import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { QuizService } from "../quiz.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private quizService: QuizService) {}

  homeForm = new FormGroup({
    username: new FormControl('')
  });

  isUsernameEmpty(): boolean {
    const username = this.homeForm.get('username')?.value;
    return !username || username.trim().length === 0;
  }

  async onSubmit() {
    if (this.isUsernameEmpty()) {
      return;
    }

    const username = this.homeForm.get('username')?.value!;
    this.quizService.currentUsername = username;
    await this.router.navigate(['/quiz']);
  }
}
