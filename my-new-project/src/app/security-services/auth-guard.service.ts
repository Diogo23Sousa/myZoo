import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private authenticationService : AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            return true;
        // return this.authenticationService.isUserLoggedIn();
        //  .then(
        //      (authenticated : boolean) => {
        //          if (authenticated) {
        //              return true;}
        //              else {
        //                  this.router.navigate(['/']);
        //              }
        //          }       
     };
}