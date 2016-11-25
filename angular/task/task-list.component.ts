import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    moduleId: module.id,
    selector: "task-list",
    template: `
        <div class="list-group">
            <a style="cursor: default;" class="list-group-item" *ngFor="let t of tasks" (click)="onSelect(t)" [class.active]="t === selectedTask">{{t.name}}</a>
        </div>
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
        this.taskService.getTasks()
            .subscribe(tasks => this.tasks = tasks);
    }

    onSelect(task: Task): void {
        this.selectedTask = task;
    }
}