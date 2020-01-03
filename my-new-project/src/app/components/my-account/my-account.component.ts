import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
id: number;
userName: String;
email: String;
password: String;
age: number;
role: String;

missingParameters: String = 'none';
missingParametersPassword: String = 'none';

nameUnavailable: String = 'none';
nameAvailable: String = 'none';
ageIsNaN: String = 'none';
emailAvailable: String = 'none';
emailUnavailable: String = 'none';
emailFormatIsInvalid: String = 'none';

userUpdatedSucess: String = 'none';
userUpdatedUnsucess :String = 'none';

booleanUsernameAvailable: boolean = false;
booleanEmailAvailable: boolean = true;

constructor(private userService: UserService, private userDataService: UserDataService) { }

ngOnInit() {
    this.userService.findByName(sessionStorage.getItem('username')).subscribe(
      myAccountInfo => {
      this.id = myAccountInfo[0].id;
      this.userName = myAccountInfo[0].name
      this.email = myAccountInfo[0].email;
      this.password = myAccountInfo[0].password;
      this.age = myAccountInfo[0].age;
      this.role = myAccountInfo[0].role;
  });
}

updateMyAccount() {
  // Performs a validation before making any request sending helping messages to the user
    this.ngModelValidation();
  // After Validation, if the user meets the required parameters the userInfo will be updated
    if (this.userName != null && this.email != null && this.age != null && this.password != null && this.booleanUsernameAvailable === this.booleanEmailAvailable === true){
        
        const user = new User (this.id, this.userName, this.password, this.email, this.age, this.role);
        this.userService.newUser(user).subscribe(updateUser => console.log(updateUser));
        this.emailFormatIsInvalid = 'none';
        this.ageIsNaN = 'none';
        this.missingParameters = 'none';
        this.missingParametersPassword = 'none';
        this.userUpdatedSucess = '';
        this.userUpdatedUnsucess = 'none';
        location.href = "/myaccount";
      }
      else {
        this.userUpdatedSucess = 'none';
        this.userUpdatedUnsucess = '';
        window.scrollTo(0, 0);
      }
}

// This is a method that validates all the inputs needed for createNewUser()
ngModelValidation() {
  if (this.userName === '') {
    this.userName = null;
  }
  if (this.email === '' || this.email.length < 5) {
    this.emailFormatIsInvalid = '';
    this.email = null;
  }
  if (isNaN(this.age)) {
    this.ageIsNaN = '';
    this.age = null;
  }
  if (this.password === '' || this.password.length < 6) {
    this.missingParametersPassword = '';
    this.password = null;
  }
  if (this.userName === null || this.email === null || this.password === null ||
      this.age === null || this.password === null) {
      this.missingParameters = ''; }
 
  // VALIDATES THE USERNAME AVAILABILITY
  if (this.booleanUsernameAvailable === false && this.userName === sessionStorage.getItem('username')) {
    this.booleanUsernameAvailable = true;
  }
    // VALIDATES THE EMAIL AVAILABILITY
  this.userService.findByEmail(this.email).subscribe(checkEmail => {
    if (checkEmail[0].name === sessionStorage.getItem('username')){
      this.booleanEmailAvailable = true;
    }
  })
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
  if (emailInput !== null ) {
    this.emailAvailable = 'none'
    this.emailUnavailable = '';
    this.booleanEmailAvailable = false;
  } else { 
    this.emailAvailable = '';
    this.emailUnavailable = 'none';
    this.booleanEmailAvailable = true;
  }
});
}

}

