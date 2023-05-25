import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import {HttpHeaders, HttpClient} from '@angular/common/http'
import { Tasks } from '../Tasks';
import { TASKS } from '../mock-tasks';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
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
  updateReminder(task:Tasks):Observable<Tasks>{
    const chUrl=`${this.url}/${task.id}`
    return this.http.put<Tasks>(chUrl,task,httpOptions)
  }
  addTask(task:Tasks):Observable<Tasks>{
    return this.http.post<Tasks>(this.url,task,httpOptions)
  }

}
