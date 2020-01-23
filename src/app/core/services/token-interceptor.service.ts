import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Nzk3MTMwNTgsIm5iZiI6MTU3OTcxMzA1OCwianRpIjoiOGZhOWY0OWYtNTUyZS00MjJjLWFiNzQtZDMwYzFiZGVhZGM5IiwiZXhwIjoxNTc5NzEzOTU4LCJpZGVudGl0eSI6IlJhamVzaCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.OhHItfkioUG_oDA0LTlDeVqYFJnEFiMMxaINAs1PVw0"

  BASE_URL = "http://107.152.33.240:8000";

  constructor() { 

  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request)
    this.TOKEN = window.localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.TOKEN}`
      },
      url: this.BASE_URL + request.url
    });
    return next.handle(request);
  }

}
