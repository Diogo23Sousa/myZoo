import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Email } from '../models/email';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.userUrl = 'http://localhost:8080/user';
  }
 
  public findById(id: number) {
    return this.httpClient.get<User>(this.userUrl.concat('/get/') + id);
  }

  public findAll() {
    return this.httpClient.get<User[]>(this.userUrl.concat('/getall'));
  }

  public newUser(user: User) {
    return this.httpClient.post<User>(this.userUrl.concat('/create'), JSON.stringify(user), httpOptions);
  }

  public updateUser(user: User, name: String) {
    return this.httpClient.put<User>(this.userUrl.concat('/update/') + name, user);
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

  public deleteById (number: number) {
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

  public findByRole (role: String) {
    return this.httpClient.get<User[]>(this.userUrl.concat("/getbyrole/" + role));
  }

  public deleteAll() {
    return this.httpClient.delete(this.userUrl.concat('/deleteall'));
  }

  public sendHelpEmail (email: Email) {
    console.log("I'm on my user services sending this message: " + email);
    return this.httpClient.post<String>(this.userUrl.concat("/email/help"), JSON.parse(JSON.stringify(email)), httpOptions);
  }
}
