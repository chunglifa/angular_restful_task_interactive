import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RajanService {

  constructor(private _http: HttpClient) {

   }
  getTasks() {
    return this._http.get('/tasks');
  }
  postTask(newTask) {
    console.log('rajan.service.ts', newTask);
    return this._http.post('/tasks', newTask);
  }

  editTask(selectedTask) {
    console.log('Getting to editTask() in rajan.Service.ts');
    console.log('editing task', selectedTask);
    return this._http.put('/edit/'+selectedTask._id, selectedTask);
  }
  deleteTask(id) {
    console.log('Getting to deleteTask function');
    console.log(id);
    return this._http.delete('/tasks/'+id);
  }
}
