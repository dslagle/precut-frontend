"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task.service');
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.tasks = this.taskService.getTasks();
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "task-list",
            template: "\n        <ul class=\"heroes\">\n            <li *ngFor=\"let t of tasks\" (click)=\"onSelect(t)\" [class.selected]=\"t === selectedTask\">\n                <span class=\"badge\">{{t.status}}</span> {{t.name}}\n            </li>\n        </ul>\n    ",
            styleUrls: [
                "task-list.component.css"
            ]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map