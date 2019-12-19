import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {
myUser : User[];

    constructor (private authenticationService : AuthenticationService, private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            if (this.authenticationService.isUserLoggedIn()) {
                return true;
            } 
                this.router.navigate(['/login']);
                return false;
     };
}