import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDeleteTask: EventEmitter<Tasks>=new EventEmitter()
  
  deleteTask(task:Tasks){
    console.log(task);
    this.onDeleteTask.emit(task);
  }
  toggleTaskReminder(){
   console.log("ña");
  }
}
