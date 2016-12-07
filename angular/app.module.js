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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var task_service_1 = require('./task/task.service');
var task_component_1 = require('./task/task.component');
var task_list_component_1 = require('./task/task-list.component');
var jira_service_1 = require('./jira/jira.service');
var http_1 = require('@angular/http');
var release_input_component_1 = require('./jira/release-input.component');
var map_component_1 = require('./map/map.component');
var route_list_component_1 = require('./route/route-list.component');
var map_service_1 = require('./map/map.service');
var data_service_1 = require('./model/data.service');
var route_filter_pipe_1 = require('./route/route-filter.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [task_service_1.TaskService, jira_service_1.JiraService, map_service_1.MapService, data_service_1.DataService],
            declarations: [
                app_component_1.AppComponent,
                task_component_1.TaskComponent,
                task_list_component_1.TaskListComponent,
                release_input_component_1.ReleaseInputComponent,
                map_component_1.MapComponent,
                route_list_component_1.RouteListComponent,
                route_filter_pipe_1.RouteFilterPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map