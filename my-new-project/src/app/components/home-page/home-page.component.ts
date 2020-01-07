import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security-services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  email: Email;
  emailName: String;
  message: String;
  userIsLoggedIn: boolean = false;
  username: String;

  constructor(private userService : UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userIsLoggedIn = this.authenticationService.isUserLoggedIn();
    if (this.userIsLoggedIn)
    {this.username = sessionStorage.getItem('username');
    this.userService.findByName(sessionStorage.getItem('username')).subscribe(myUser => {
      this.emailName = myUser[0].email;
    })
  }
  }

  sendHelpEmail() {
    console.log("I'm sending an help message...");
    this.email.emailMessage = this.message;
    this.email.emailSender = this.emailName;
    this.email.emailSubject = "HELP MESSAGE";
    this.email.localDateTime = "";
    this.userService.sendHelpEmail(this.email).subscribe(helpMsg => {
      console.log(helpMsg);
    })
    
  }


}
