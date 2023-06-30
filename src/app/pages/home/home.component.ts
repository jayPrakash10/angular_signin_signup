import { Component } from '@angular/core';

interface UserDetail {
  fname: string
  lname: string
  email: string
  password: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected userDetail: UserDetail;

  constructor() {
    this.userDetail = JSON.parse(localStorage.getItem("signup") || "");
  }
}
