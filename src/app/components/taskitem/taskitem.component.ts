import { Component, Input } from '@angular/core';
import { Tasks } from '../../Tasks';
import { TASKS } from '../../mock-tasks';
@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  @Input() task:Tasks = TASKS[0]

}
