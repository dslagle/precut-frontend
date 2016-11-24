import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    moduleId: module.id,
    selector: "task-list",
    template: `
        <ul class="heroes">
            <li *ngFor="let t of tasks" (click)="onSelect(t)" [class.selected]="t === selectedTask">
                <span class="badge">{{t.status}}</span> {{t.name}}
            </li>
        </ul>
    `,
    styleUrls: [
        "task-list.component.css"
    ]
})
export class TaskListComponent implements OnInit {
    tasks: Task[];
    selectedTask: Task;

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }
}