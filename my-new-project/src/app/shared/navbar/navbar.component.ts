import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/security-services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})

export class NavbarComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) { }
  userIsLoggedIn: boolean = false;

  ngOnInit() {
    this.userIsLoggedIn = this.authenticationService.isUserLoggedIn();
  }

  logOut () {
    this.authenticationService.logOut();
    location.href="/";
  }

  


}
