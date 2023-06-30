import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  formError: ValidationErrors = {
    email: null,
    password: null
  };

  error = {
    login : "",
  }

  ngOnInit(): void {
  }

  onPasswordChange() {
    this.error.login = "";
  }

  submit() {
    this.formError = {
      email: null,
      password: null
    };

    if(this.LoginForm.get('email')?.errors || this.LoginForm.get('password')?.errors) {
      if(this.LoginForm.get('email')?.errors) {
        this.formError['email'] = this.LoginForm.get('email')?.errors;
      }
      if(this.LoginForm.get('password')?.errors) {
        this.formError['password'] = this.LoginForm.get('password')?.errors;
      }
    } else {
      if(localStorage.getItem('signup')) {
        const getSignupDetails = localStorage.getItem('signup') || '';
        const signupCredential = JSON.parse(getSignupDetails);
        const loginCredential = this.LoginForm.value;
        if(loginCredential.email === signupCredential.email && loginCredential.password === signupCredential.password) {
          this.router.navigate(["/home"]);
        } else {
          if(loginCredential.email !== signupCredential.email && loginCredential.password !== signupCredential.password) {
            this.error.login = 'Wrong Credential';
          } else if(loginCredential.email !== signupCredential.email) {
            this.error.login = 'Wrong Credential';
          } else if(loginCredential.password !== signupCredential.password) {
            this.error.login = 'Password does not match';
          }
        }
      } else {
        alert('Data not found');
        this.router.navigate(['/signup']);
      }
    }
  }
}
