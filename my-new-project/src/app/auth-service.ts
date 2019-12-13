import { reject } from 'q';

export class AuthService {
    loggedIn = false;
   
    isAutenticated() {
        return true;
    }
    logIn () {
        this.loggedIn = true;
    }

    logOut () {
        this.loggedIn = false;
    }

}