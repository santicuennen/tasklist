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

}
