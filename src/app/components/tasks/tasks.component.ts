import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Tasks } from '../../Tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

tasks: Tasks[] = [];
constructor(private taskservice:TaskService){}

ngOnInit():void{  
  this.taskservice.getTasks().subscribe(tasks=>this.tasks = tasks)
}
deleteTask(task:Tasks){
  this.taskservice.deleteTask(task).subscribe(()=>{
    this.tasks = this.tasks.filter(t=>t.id !== task.id)
    }
  )
}
toggleReminder(task:Tasks){
  task.reminder = !task.reminder
  this.taskservice.updateReminder(task).subscribe()
}
addTask(task:Tasks){
  this.taskservice.addTask(task).subscribe((task)=>{
    this.tasks.push(task)
  })
}
}
