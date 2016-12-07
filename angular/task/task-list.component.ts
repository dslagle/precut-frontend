import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: "task-list",
    template: `
        <div class="list-group">
            <a style="cursor: default;" class="list-group-item" *ngFor="let t of tasks" (click)="onSelect(t)" [class.active]="t === selectedTask">
                <img src="resources/ready.svg" width="32" height="32" *ngIf="t.status === 1" />
                <img src="resources/ajax-loader.gif" *ngIf="t.status === 2" />
                <img src="resources/ic_check_circle_black_18dp.png" *ngIf="t.status === 3" />
                <img src="resources/ajax-loader.gif" *ngIf="t.status === 4" />
                <span>{{t.name}}</span>
            </a>
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
        this.selectedTask.status = 2;
        this.taskService.executeTask(task)
            .subscribe(result => {
                console.log(result);
                task.status = 3;
            }, (err) => task.status = 4);
    }
}