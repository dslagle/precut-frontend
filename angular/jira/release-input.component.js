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
var jira_service_1 = require('./jira.service');
var ReleaseInputComponent = (function () {
    function ReleaseInputComponent(jira) {
        this.jira = jira;
    }
    ReleaseInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jira.getFixVersions()
            .subscribe(function (data) {
            _this.versions = data.sort();
            _this.selectedVersion = _this.selectedVersion || (_this.versions[0]);
        });
    };
    ReleaseInputComponent.prototype.onSelectVersion = function (v) {
        this.selectedVersion = v;
    };
    ReleaseInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "version-selector",
            templateUrl: "release-input.component.html",
            styleUrls: ["release-input.component.css"]
        }), 
        __metadata('design:paramtypes', [jira_service_1.JiraService])
    ], ReleaseInputComponent);
    return ReleaseInputComponent;
}());
exports.ReleaseInputComponent = ReleaseInputComponent;
//# sourceMappingURL=release-input.component.js.map