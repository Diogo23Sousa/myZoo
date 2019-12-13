import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service';


export class AuthGuard implements CanActivate {
    constructor (private authService: AuthService, private router: Router) {

    }


    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.authService.isAutenticated()
        
        throw new Error("Method not implemented.");
    }

    
}