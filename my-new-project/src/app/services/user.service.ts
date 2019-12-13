import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Animal } from '../models/animal';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users : User [];
private userUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.userUrl =  'http://localhost:8080/user';
  }
 
  public findAll() {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getall'));
  }

  public newUser (user: User) {
    return this.httpClient.post<User>(this.userUrl.concat('/create'), JSON.stringify(user), httpOptions);
  } 

  public generateUsers(body: String) {
    return this.httpClient.post(this.userUrl.concat('/generate') , body);
  }

  public findByName(name: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getbyname/' + name)); 
  }

  public findByEmail(email: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getbyemail/' + email)); 
  }

  public findByAge(age: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getbyage/' + age)); 
  }

  public deleteById (number: Number) {
  return this.httpClient.delete(this.userUrl.concat('/delete/' + number));  
  }

  public findByLetter (letter: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getbyletter/' + letter));
  }

  public findEmailByLetter (letter: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getemailbyletter/' + letter));
  }

  public findAgeByNumber (number: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getbynumber/' + number));
  }

  public deleteAll() {
    return this.httpClient.delete(this.userUrl.concat('/deleteall'));
  }

  public logIn (username: String, password: String) {
    return this.httpClient.get<User>(this.userUrl.concat('/login' + username + password));
  }

  
}
