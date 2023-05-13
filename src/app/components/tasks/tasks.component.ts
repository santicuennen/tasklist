import { Component } from '@angular/core';
import { Tasks } from '../../Tasks';
import { TASKS } from '../../mock-tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: Tasks[] = TASKS;
}
