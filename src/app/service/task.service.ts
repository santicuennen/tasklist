import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import {HttpHandler, HttpClient} from '@angular/common/http'
import { Tasks } from '../Tasks';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url="http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }
  getTasks():Observable <Tasks[]>{
    return this.http.get<Tasks[]>(this.url)
  }
  deleteTask(task:Tasks):Observable<Tasks>{
    const delUrl= `${this.url}/${task.id}`
    return this.http.delete<Tasks>(delUrl)
  }

}
