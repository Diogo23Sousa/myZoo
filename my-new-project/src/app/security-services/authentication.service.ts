import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

// MY JSON OBJECT
export class User{
  constructor(public status:string,) {}
}

// MY RESPONSE TOKEN FROM JWT
export class JwtResponse{
  constructor(public jwttoken:string,) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient, private userService: UserService) {}
 

     authenticate(username, password) {
      return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+ userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
      );
    }
    
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

}