import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css'],
  providers: [UserService]
})

@Injectable()
export class CreateNewUserComponent implements OnInit {
userName: String;
email: String;
age: number;
password: String;
rePassword: String;
missingParameters: String = 'none';
missingParametersPassword: String = 'none';
missingMatchParametersPassword: String = 'none';
userCreatedSucess: String = 'none';
nameUnavailable: String = 'none';
nameAvailable: String = 'none';
emailUnavailable: String = 'none';


  constructor(private userService : UserService) {
   }

  ngOnInit() {
  }

  ngModelValidation () {
    if (this.userName == '') {this.userName = null};
    if (this.email == '') { this.email = null};
    if (isNaN(this.age)) { this.age = null};
    if (this.password == '') {this.password = null};
    if (this.rePassword == '') {this.rePassword = null};
    if(this.userName == null || this.email == null || this.password == null || this.age ==null || this.password == null || this.rePassword == null) {
      this.missingParameters = '';}
    if (this.password.length < 6 || this.rePassword.length < 6) {
        this.password = null;
        this.rePassword = null;
        this. missingParametersPassword = '';
    }
    if (this.password != this.rePassword) {
      this.password = null;
      this.rePassword = null;
      this.missingMatchParametersPassword = '';
    }
  }

  checkExistingUser() {
    if (this.userName == '') {
      this.userName = null;
      this.nameAvailable = this.nameUnavailable = 'none';
    }
    if (this.userName != null) {
  this.userService.findByName(this.userName).subscribe(nameInput => {
    if (nameInput == null) {
      this.nameUnavailable = 'none';
      this.nameAvailable = '';
    }
    else {
      this.nameAvailable = 'none';
      this.nameUnavailable = '';
    }
  }) 
}
}

checkExistingEmail() {
  if (this.email == '') {
    this.email = null;
  }
this.userService.findByEmail(this.email).subscribe(emailInput => {
  if (emailInput != null) {
    this.emailUnavailable = '';
  }
  else {
    this.emailUnavailable = 'none';
  }
 }) 
}

  createNewUser() {
    this.ngModelValidation();
    if (this.userName != null && this.email != null && this.age != null && this.password != null){
      var user = new User (this.userName, this.password, this.email, this.age);
      this.userService.newUser(user).subscribe(x => console.log(x));
      this.missingParameters = 'none';
      this.missingParametersPassword = 'none';
      this.userCreatedSucess = '';
    }  
}
}
