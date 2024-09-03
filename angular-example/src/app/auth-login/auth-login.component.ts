import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  constructor(private http: HttpClient, private  router: Router, private quizService: QuizService) {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  });

  onSubmit() {
    this.http.get('http://localhost:3000/users').subscribe((users: any) => {
      const user = users.find((user: any) => user.username === this.loginForm.get('username')?.value);
      console.log(this.loginForm.get('username')?.value);
      if (user && user.password === this.loginForm.get('password')?.value) {

        const authUser = {username: user.username};
        this.quizService.currentUser = authUser;
        window.localStorage.setItem('user', JSON.stringify(authUser));
        this.router.navigate(['/quiz']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
