import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
userName: String;
email: String;
password: String;
age: Number;
missingParameters: String = 'none';
missingParametersPassword: String = 'none';
nameUnavailable: String = 'none';
nameAvailable: String = 'none';
emailUnavailable: String = 'none';
userUpdatedSucess: String = 'none';
booleanUsernameAvailable: boolean = true;
booleanEmailAvailable: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findByName(sessionStorage.getItem('username')).
    subscribe(myAccountInfo => {
      let myAccount = myAccountInfo[0];
      this.userName = myAccount.name;
      this.email = myAccount.email;
      this.password = myAccount.password;
      this.age = myAccount.age;
  });
}

updateMyAccount() {
    this.ngModelValidation();
    if (this.userName != null && this.email != null && this.age != null && this.password != null && this.booleanEmailAvailable === true && this.booleanUsernameAvailable === true){
        console.log("SERVICE SUCESS");
        const user = new User (this.userName, this.password, this.email, this.age, "USER");
        this.userService.newUser(user).subscribe(x => console.log(x));
        this.missingParameters = 'none';
        this.missingParametersPassword = 'none';
        this.userUpdatedSucess = '';
        window.scrollTo(0, 0);
      }
}

// This is a method that validates all the inputs needed for createNewUser()
ngModelValidation() {
  if (this.userName === '') {this.userName = null; }
  if (this.email === '') { this.email = null; }
  // if (isNaN(this.age)) { this.age = null; }
  if (this.password === '') {this.password = null; }
  if (this.userName === null || this.email === null || this.password === null ||
      this.age === null || this.password === null) {
      this.missingParameters = ''; }
  if (this.password.length < 6) {
        this.password = null;
    }
  }

  // Checks if the name given is already present in the database || Name is an UNIQUE DB FIELD
checkExistingUser() {
  if (this.userName === '') {
      this.userName = null;
      this.nameAvailable = this.nameUnavailable = 'none';
    }
  if (this.userName !== null) {
  this.userService.findByName(this.userName).subscribe(nameInput => {
  if (nameInput === null) {
      this.nameUnavailable = 'none';
      this.nameAvailable = '';
      this.booleanUsernameAvailable = true;
    } else {
      this.nameAvailable = 'none';
      this.nameUnavailable = '';
      this.booleanUsernameAvailable = false;
    }
  });
}
}

// Checks if the email given is already present in the database || Email is an UNIQUE DB FIELD
checkExistingEmail() {
  if (this.email === '') {
    this.email = null;
  }
  this.userService.findByEmail(this.email).subscribe(emailInput => {
  if (emailInput !== null) {
    this.emailUnavailable = '';
    this.booleanEmailAvailable = false;
  } else { 
    this.emailUnavailable = 'none';
    this.booleanEmailAvailable = true;
  }
});
}

}

