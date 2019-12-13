import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

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
missingParameters: String = 'none';
missingParametersPassword: String = 'none';
missingMatchParametersPassword: String = 'none';
userCreatedSucess: String = 'none';

  constructor(private userService : UserService) {
   }

  ngOnInit() {
  }

  logIn () {
    this.userService.logIn(this.userNameLogin, this.passwordLogin).subscribe(user => {
      if (user != null) {
        console.log("USERNAME IS VALID: " + JSON.stringify(user));
      }
      else {
        console.log("INVALID USERNAME")
      }
    });

  }

  

}
