import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SperoService {

  constructor(private _http: HttpClient) {
    this.getUsers();
  }
  getUsers() {const tempObservable = this._http.get('/tasks');
  tempObservable.subscribe(data => console.log('Got our Users from Speros!', data));

  }
}
