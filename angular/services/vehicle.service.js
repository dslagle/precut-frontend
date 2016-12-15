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
var VehicleService = (function () {
    function VehicleService(http) {
        this.http = http;
        this.GOOGLE_KEY = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";
        this.API_URL = "http://localhost:9000/data";
        this.GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
        this.info = [];
    }
    VehicleService.prototype.getVehicles = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.API_URL + "/vehicle", { headers: headers })
            .map(function (data) { return JSON.parse(data._body); })
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    VehicleService.prototype.getSegmentInfoForVehicle = function (v) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.API_URL + "/vehicle/" + v.VehicleID + "/gps";
        return this.http.get(url, { headers: headers })
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    VehicleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map