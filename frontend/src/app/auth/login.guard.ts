import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

const whiteListUrl = {
    "login": true,
    "register/user": true,
    "register/partner": true,
};


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router,
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.userService.currentUser;
        if( (whiteListUrl[route.routeConfig.path] && !user.accessToken) ||
            (!whiteListUrl[route.routeConfig.path] && user.accessToken))
        {
            return true;
        }
        user.accessToken ? this.router.navigate(['/']) : this.router.navigate(['login']);
        return false;
    }
}
