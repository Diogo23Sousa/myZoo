import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})

@Injectable()
export class CreateNewUserComponent implements OnInit {
userName: String;
booleanUsernameAvailable: boolean = true;
email: String;
booleanEmailAvailable: boolean = true;
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

constructor(private userService : UserService) { }

ngOnInit() {
}

// This is a method that validates all the inputs needed for createNewUser()
ngModelValidation() {
  if (this.userName === '') {this.userName = null; }
  if (this.email === '') { this.email = null; }
  if (isNaN(this.age)) { this.age = null; }
  if (this.password === '') {this.password = null; }
  if (this.rePassword === '') {this.rePassword = null; }
  if (this.userName === null || this.email === null || this.password === null ||
      this.age === null || this.password === null || this.rePassword === null) {
      this.missingParameters = ''; }
  if (this.password.length < 6 || this.rePassword.length < 6) {
        this.password = null;
        this.rePassword = null;
        this. missingParametersPassword = '';
    }
  if (this.password !== this.rePassword) {
      this.password = null;
      this.rePassword = null;
      this.missingMatchParametersPassword = '';
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

createNewUser() {
  this.ngModelValidation();
  if (this.userName != null && this.email != null && this.age != null && this.password != null && this.booleanEmailAvailable === true && this.booleanUsernameAvailable === true){
      console.log("SERVICE SUCESS");
      const user = new User (null, this.userName, this.password, this.email, this.age, "USER");
      this.userService.newUser(user).subscribe(x => console.log(x));
      this.missingParameters = 'none';
      this.missingParametersPassword = 'none';
      this.missingMatchParametersPassword = 'none';
      this.userCreatedSucess = '';
      window.scrollTo(0, 0);
    }
}
}
