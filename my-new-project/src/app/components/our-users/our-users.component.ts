import { Component, OnInit, Output, Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-our-users',
  templateUrl: './our-users.component.html',
  styleUrls: ['./our-users.component.css'],
  providers: [UserService]
})
@Injectable()
export class OurUsersComponent implements OnInit {
  users: User [];
  nameInput: String;
  emailInput: String;
  ageInput: String;
  roleInput: String;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUsers();
    
  }

  generateNewUsers () {
      this.userService.generateUsers('Any').subscribe(x => console.log(x));
      location.reload();
  }

  getAllUsers () {
    this.userService.findAll().subscribe(allUsers => {
      this.users = allUsers;
  })
}
  getUserByName () {
    this.userService.findByName(this.nameInput).subscribe(usersByName => {
      this.users = usersByName;
    })
  }
  getUserByLetter() {
    this.emailInput = this.ageInput = this.roleInput = '';
    if (this.nameInput == '') {this.getAllUsers()}
    else {
      this.userService.findByLetter(this.nameInput).subscribe(usersWithLetter => {
        this.users = usersWithLetter;
      })
    }
  }

  getUserByEmailLetter () {
    this.nameInput = this.ageInput = this.roleInput = '';
    if (this.emailInput == '') {this.getAllUsers()}
    else {
      this.userService.findEmailByLetter(this.emailInput).subscribe(speciesWithLetter => {
        this.users = speciesWithLetter;
      })
    }
  }

  getUserByAgeNumber () {
    this.nameInput = this.emailInput = this.roleInput = '';
    if (this.ageInput == '') {this.getAllUsers()}
    else {
      this.userService.findAgeByNumber(this.ageInput).subscribe(ageWithNumber => {
        this.users = ageWithNumber;
      })
    }
  }

  getUsersByRole() {
    if (this.roleInput == '') {this.getAllUsers()}
    else {
      this.userService.findByRole(this.roleInput).subscribe(usersWithRole => {
        this.users = usersWithRole;
      })
    }
  }

  deleteUserById (number: Number) {
    this.userService.deleteById(number).subscribe(x => console.log(x));
    location.reload();
  }
  
  deleteAllUsers () {
    this.userService.deleteAll().subscribe(x => console.log(x));
    location.reload();
  }

  clearUserFilter () {
    this.nameInput = this.emailInput = this.ageInput = this.roleInput = '';
    this.getAllUsers();
  }
}

