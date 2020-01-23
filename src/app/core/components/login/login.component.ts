import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private _authenticationService: AuthenticationService, private _route: Router) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm) {
    console.log(f.value);
    this._authenticationService.login(f.value)
      .subscribe((data: any) => {
        console.log(data);
        this._authenticationService.setUserLoggedInStatus(true);
        window.localStorage.setItem('token', data.token);
        setTimeout(() => {
          this._route.navigate(['/home']);
        }, 500);
      }, err => {
        console.log(err);
        this._authenticationService.setUserLoggedInStatus(false);

      })
  }

}
