import { Injectable } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: CoreModule
})
export class AuthenticationService {

  API_END_POINT = '';

  isLoggedIn: boolean;

  redirectUrl: string;

  constructor(private _http:HttpClient) { }

  login(payoad) {
    return this._http.post('/login', payoad);
  }

  logout() {
    window.localStorage.removeItem('token');
    this.setUserLoggedInStatus(false);
    return true;
  }

  checkUserLoggedInStatus() {
    const token = window.localStorage.getItem('token');
    if (!token) {
      this.logout();
      return false;
    }
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    if(isExpired) {
      this.logout();
      return false;
    } else {
      this.setUserLoggedInStatus(true);
      return true;
    }
  }

  setUserLoggedInStatus(loggedIn: boolean) {
    this.isLoggedIn = loggedIn
  }

}
