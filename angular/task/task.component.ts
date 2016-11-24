import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
    selector: "tr[task]",
    template: `
        <td>{{task.status}}</td>
        <td>{{task.name}}</td>
    `,
    styles: [``]
})
export class TaskComponent {
    @Input()
    task: Task;
}