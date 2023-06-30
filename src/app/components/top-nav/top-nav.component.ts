import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  protected isMenuOpened: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  
  toggleMenuFromOutside(event: any) {
    if(event.target.id === "m_sidebar") {
      this.toggleMenu();
    };
  }

  logout() {
    localStorage.removeItem("signup");
    this.router.navigate(["/signin"]);
  }
}
