import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RajanService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.view();
   }
  getTasks() {

    return this._http.get('/tasks');
    //this route goes to server route /tasks and returns that back

  }



  destroy() {

  }


}
