import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuizComponent} from "./quiz/quiz.component";
import {ScoreQuizComponent} from "./score-quiz/score-quiz.component";
import {AuthRegisterComponent} from "./auth-register/auth-register.component";
import {AuthLoginComponent} from "./auth-login/auth-login.component";

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"quiz",
    component: QuizComponent
  }
  ,
  {
    path:"quiz/score",
    component: ScoreQuizComponent
  },
  {
    path:"register",
    component: AuthRegisterComponent
  },
  {
    path:"login",
    component: AuthLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
