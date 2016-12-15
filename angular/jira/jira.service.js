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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var JiraService = (function () {
    function JiraService(http) {
        this.http = http;
        this.JIRA_KEY = "Basic ZHNsYWdsZTpNb29TaG9HYWlQYW4xMCE=";
        this.API_URL = "http://localhost:9000/data";
        this.JIRA_URL = "http://jira.routematch.com/rest/api/2";
        this.VERSION_MATCH = /RM#\d{1,2}\.\d{1,2}\.\d{1,2}.+/;
    }
    JiraService.prototype.getVehicles = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.API_URL + "/vehicle", { headers: headers })
            .map(function (data) { return JSON.parse(data._body).map(function (v) { return v.InternalVehicleID; }); })
            .catch(function (err) { return Rx_1.Observable.throw(err.json()); });
    };
    JiraService.prototype.getFixVersions = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.JIRA_KEY });
        return this.http.get(this.JIRA_URL + "/issue/createmeta?projectKeys=FR&expand=projects.issuetypes.fields", { headers: headers })
            .map(function (data) {
            return JSON.parse(data._body).projects[0].issuetypes[0].fields.fixVersions.allowedValues
                .map(function (v) { return v.name; })
                .filter(function (v) { return _this.VERSION_MATCH.test(v); });
        })
            .catch(function (err) { return Rx_1.Observable.throw(err.json()); });
    };
    JiraService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JiraService);
    return JiraService;
}());
exports.JiraService = JiraService;
//# sourceMappingURL=jira.service.js.map