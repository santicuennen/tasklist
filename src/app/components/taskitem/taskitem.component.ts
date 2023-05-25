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
  @Output() onToggleTask: EventEmitter<Tasks>=new EventEmitter()
  @Output() onDeleteTask: EventEmitter<Tasks>=new EventEmitter()
  
  toggleTaskReminder(task:Tasks){
    this.onToggleTask.emit(task);
  }
  deleteTask(task:Tasks){
    this.onDeleteTask.emit(task);
  }
}
