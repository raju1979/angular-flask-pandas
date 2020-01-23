import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http:HttpClient) { }


  getAllData() {
    return this._http.post('/titanic/all',{});
  }

  getAllColumns() {
    return this._http.get('/titanic/columns');
  }

}
