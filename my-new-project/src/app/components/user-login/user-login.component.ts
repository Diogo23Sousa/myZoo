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
userNameLogin: String;
passwordLogin: String;
validLogin: String = 'none';
invalidLogin: String = 'none';

constructor(private authenticationService : AuthenticationService) {
}

  ngOnInit() {
  }

  logIn() {
      this.authenticationService.authenticate(this.userNameLogin, this.passwordLogin).subscribe(userLogin => {
        console.log(userLogin);
      if (sessionStorage.getItem('username') !== null && sessionStorage.getItem('token') !== null) {
        this.validLogin = '';
        this.invalidLogin = 'none';
        location.href = '/';
      }});
      if ((sessionStorage.getItem('username') === null && sessionStorage.getItem('token') === null)) {
        this.validLogin = 'none';
        this.invalidLogin = '';
        this.passwordLogin = null;
        window.scrollTo(0, 0);
      }
  }
}