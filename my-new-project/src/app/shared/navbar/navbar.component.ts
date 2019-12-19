import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/security-services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})

export class NavbarComponent implements OnInit {
  myUser : User [];
  isUserAdmin: boolean = false;
  userIsLoggedIn: boolean = false;
  username: String;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }
 

  ngOnInit() {
    this.isAdmin();
    this.userIsLoggedIn = this.authenticationService.isUserLoggedIn();
    this.getUserName();
  }

  logOut() {
    this.authenticationService.logOut();
    location.href="/";
  }

  getUserName () {
    if (this.userIsLoggedIn) {
      this.username = sessionStorage.getItem('username');
    }
  }

  isAdmin() {
    this.userService.findByName(sessionStorage.getItem('username')).subscribe(myUserAdmin => {
    this.myUser = myUserAdmin;
    if (this.myUser !== null && this.myUser[0].role == 'ADMIN') {
        this.isUserAdmin = true;  
        } else {
          this.isUserAdmin = false;
        }
  });
  
}
}
