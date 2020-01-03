import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
userId: number;

  constructor(private userService: UserService) { }

  sendUsername (username: String) {
    this.userService.findByName(username).subscribe(userDetails => {
    this.userId = userDetails[0].id;
    })
    return this.userId;
  }

  // getUserId(){
  //   return userId;
  // }
}
