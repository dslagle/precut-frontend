import { Injectable } from '@angular/core';
import { Task } from './task';

import tasks from './tasks';

@Injectable()
export class TaskService {
    getTasks(): Task[] {
        return tasks;
    }
}