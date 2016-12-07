import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from './task';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class TaskService {
    constructor(private http: Http) { }

    getTasks(): Observable<Task[]> {
        return this.http.get("http://localhost:9000/task")
            .map(response => {
                let data = response.json();
                return <Task[]>data;
            });
    }

    executeTask(t: Task): Observable<any> {
        return this.http.post(`http://localhost:9000/task/${t.id}/run`, { })
            .map(response => {
                let data = response.json();
                return data;
            });
    }
}