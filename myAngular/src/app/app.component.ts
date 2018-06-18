import { Component, OnInit } from '@angular/core';
import { RajanService } from './rajan.service';
import { SperoService } from './spero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = null;
  task = null;
  title = 'app';
  constructor(
    private _rajanService: RajanService
  ) {}

  bob(){
    this.getTasksFromService();
  }
  onButtonClickParam(task): void {
    console.log(`Click event is working with object param:`, task);
    this.task = task;
  }
  getTasksFromService() {
    const observable = this._rajanService.getTasks();
    observable.subscribe(server_response => {
      console.log("Got our tasks!", server_response.data);
      this.tasks = server_response.data;
      console.log('CONSOLE.LOG TASKS 1');
      console.log(this.tasks);
    });
  }


}


