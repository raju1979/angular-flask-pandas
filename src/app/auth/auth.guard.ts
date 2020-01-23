import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _route:Router, private _authenticationService: AuthenticationService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._authenticationService.checkUserLoggedInStatus()) { return true; }

    // Store the attempted URL for redirecting
    this._authenticationService.redirectUrl = url;

    // Navigate to the login page with extras
    this._route.navigate(['/login']);
    return false;
  }

}
