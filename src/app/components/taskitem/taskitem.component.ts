import { Component, Input } from '@angular/core';
import { Tasks } from '../../Tasks';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  faTimes = faTimes;
  @Input() task:Tasks = TASKS[0]
  
  deleteTask(){
    console.log("deleteTask");
  }
  toggleTaskReminder(){
   if (this.task.reminder){
    this.task.reminder=false
   }else{this.task.reminder=true}
  }
}
