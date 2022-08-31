import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  SignupForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  formError: ValidationErrors = {
    fname: null,
    lname: null,
    email: null,
    password: null
  };

  ngOnInit(): void {
  }

  submit() {
    this.formError = {
      fname: null,
      lname: null,
      email: null,
      password: null
    };

    if(
      this.SignupForm.get('fname')?.errors
      || this.SignupForm.get('lname')?.errors
      || this.SignupForm.get('email')?.errors
      || this.SignupForm.get('password')?.errors
    ) {
      if(this.SignupForm.get('fname')?.errors) {
        this.formError['fname'] = this.SignupForm.get('fname')?.errors;
      }
      if(this.SignupForm.get('lname')?.errors) {
        this.formError['lname'] = this.SignupForm.get('lname')?.errors;
      }
      if(this.SignupForm.get('email')?.errors) {
        this.formError['email'] = this.SignupForm.get('email')?.errors;
      }
      if(this.SignupForm.get('password')?.errors) {
        this.formError['password'] = this.SignupForm.get('password')?.errors;
      }
    } else {
      sessionStorage.setItem("signup", JSON.stringify(this.SignupForm.value));
      this.router.navigate(['/signin']);
      alert('Signup Successful\nTry logging in with same credentials');
    }
  }
}
