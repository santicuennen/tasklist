import { Injectable } from '@angular/core';
import{Observable, of} from 'rxjs'
import { Tasks } from '../Tasks';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks():Observable <Tasks[]>{
    const tasks = of (TASKS)
    return tasks;
  }
}
