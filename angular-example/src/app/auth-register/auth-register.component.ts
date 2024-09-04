import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent {
  constructor(private http: HttpClient, private router: Router) {
  }

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.usernameIsNotInPasswordValidator
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.passwordMatchValidator,
    ])
  });

  passwordMatchValidator(control: AbstractControl) {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;
    if (password !== confirmPassword) {
        return { passwordMismatch: "Passwords do not match" };
    }
    return null;
  }

  usernameIsNotInPasswordValidator(control: AbstractControl) {
    const username = control.parent?.get('username')?.value;
    const password = control.value;
    if (password.includes(username)) {
        return { usernameInPassword: "Password cannot contain username" };
    }
    return null;
  }

  async onSubmit() {
    if (!this.registerForm.valid) {
      return;
    }

    const username = this.registerForm.get('username')?.value!;
    const password = this.registerForm.get('password')?.value!;
    await this.postRegister(username, password);
  }

  postRegister = async (username: string, password: string) => {
    return this.http.post('http://localhost:3000/users', {username, password}).subscribe(res => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
  }
}
