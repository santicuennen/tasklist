import { Component, EventEmitter, Output } from '@angular/core';
import { Tasks } from 'src/app/Tasks';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
@Output() onAddTask:EventEmitter<Tasks> = new EventEmitter()

  task:string = "";
  date:string="";
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription?:Subscription;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

  }
  onSubmit(){
    if (this.task.length === 0) 
      {alert("add a task please!")
      return}
        else if(this.date.length === 0)
        {alert("add a date please!") 
        return}
    const {task,date,reminder} = this
    const newTask = {task,date,reminder}
    this.onAddTask.emit(newTask)
  }
    

  }


