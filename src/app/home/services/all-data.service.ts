import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class AllDataService implements Resolve<any> {

  constructor(private _dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._dataService.getAllData().pipe(
      tap(data => console.log(data)),
      map(data => data),
      catchError((err) => {
        return empty();
      })
    );
  }
}
