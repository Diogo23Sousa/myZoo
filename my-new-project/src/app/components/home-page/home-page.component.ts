import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security-services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userIsLoggedIn: boolean = false;
  username: String;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userIsLoggedIn = this.authenticationService.isUserLoggedIn();
    if (this.userIsLoggedIn)
    {this.username = sessionStorage.getItem('username')}
  }


}
