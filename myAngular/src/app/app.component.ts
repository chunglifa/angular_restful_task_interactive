import { Component, OnInit } from '@angular/core';
import { RajanService } from './rajan.service';
import { SperoService } from './spero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = null;
  task = null;
  title = 'app';
  newTask: any;
  h: any;
  selectedTask = null;
  constructor(
    private _rajanService: RajanService
  ) {}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {title: "", description: ""}
  }

  onSubmit() {
    console.log('************SUBMITTING DATA***********')
    console.log('************ CONSOLE LOG NEW TASK*****');
    console.log(this.newTask);
    const myObservable = this._rajanService.postTask(this.newTask);
    myObservable.subscribe((data_response) => {
      console.log('Submitted Data', data_response);
    this.newTask = {title: "", description: ""};
    this.getTasksFromService();
    });
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

  showDiv(task) {
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  updateFunction() {
    console.log('editing task', this.selectedTask);
    console.log(this.selectedTask);
    const observable = this._rajanService.editTask(this.selectedTask);
    observable.subscribe((data_response) => {
      console.log('data_response from edit', data_response);
      this.selectedTask = null;
      this.getTasksFromService();
    });

  }

  delete(id) {
    console.log(id);
    const observable = this._rajanService.deleteTask(id);
    observable.subscribe((data_response) => {
      console.log('data_response from del', data_response);
    });
    this.getTasksFromService();
  }


}


