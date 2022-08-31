import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  formError: ValidationErrors = {
    email: null,
    password: null
  };

  ngOnInit(): void {
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
      if(sessionStorage.getItem('signup')) {
        const getSignupDetails = sessionStorage.getItem('signup') || '';
        const signupCredential = JSON.parse(getSignupDetails);
        const loginCredential = this.LoginForm.value;
        if(loginCredential.email === signupCredential.email && loginCredential.password === signupCredential.password) {
          alert('Login Successful');
        } else {
          if(loginCredential.email !== signupCredential.email && loginCredential.password !== signupCredential.password) {
            alert('Wrong Credential');
          } else if(loginCredential.email !== signupCredential.email) {
            alert('Wrong Credential');
          } else if(loginCredential.password !== signupCredential.password) {
            alert('Password does not match');
          }
        }
      } else {
        alert('Data not found');
      }
    }
  }
}
