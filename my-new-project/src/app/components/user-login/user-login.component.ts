import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/security-services/authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService]
})

@Injectable()
export class UserLoginComponent implements OnInit {
userNameLogin: String = "";
passwordLogin: String = "";
validLogin: String = 'none';
invalidLogin: String = 'none';

  constructor(private authenticationService : AuthenticationService) {
   }

  ngOnInit() {
  }

  logIn() {
    if (this.userNameLogin == "" || this.passwordLogin == "") {
      this.validLogin = 'none';
      this.invalidLogin = '';
    }
    else {
      this.authenticationService.authenticate(this.userNameLogin, this.passwordLogin).subscribe(userData => {
          console.log("Login was sucessfull: " + userData);
          this.validLogin = '';
          this.invalidLogin = 'none';
          location.href="/";
      })
    }
    // else if (this.authenticationService.authenticate(this.userNameLogin, this.passwordLogin).subscribe(x => console.log(x)) === null){
    //   this.validLogin = 'none';
    //   this.invalidLogin = '';
    //   this.missingParameters = 'none';
    // }
    // else {
    //   this.validLogin = '';
    //   this.invalidLogin = 'none';
    //   this.missingParameters = 'none';
    //   this.authenticationService.authenticate(this.userNameLogin, this.passwordLogin).subscribe(userData => {
    //     console.log("Login was sucessfull: " + userData);
    //   location.href = "/";
    // });
    // }
  }
}
