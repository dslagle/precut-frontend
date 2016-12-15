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
var gpstrack_1 = require('./gpstrack');
var services_1 = require("./services");
var GPSTrackerService = (function () {
    function GPSTrackerService(http, vehicleService, googleService) {
        this.http = http;
        this.vehicleService = vehicleService;
        this.googleService = googleService;
        this.GOOGLE_KEY = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";
        this.API_URL = "http://localhost:9000/data";
        this.GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
    }
    GPSTrackerService.prototype.getVehicles = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.API_URL + "/vehicle", { headers: headers })
            .map(function (data) { return JSON.parse(data._body); })
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    GPSTrackerService.prototype.trackGPS = function (v) {
        var _this = this;
        var root = this.vehicleService.info.find(function (i) { return i.vehicle.VehicleID === v.VehicleID; });
        if (!root) {
            root = new gpstrack_1.VehicleSegmentsViewModel();
            root.vehicle = v;
            root.segments = [];
            this.vehicleService.info.push(root);
        }
        this.nextVehicleSegment(root);
        root.timer = root.timer || setInterval(function () {
            _this.nextVehicleSegment(root);
        }, 10000);
    };
    GPSTrackerService.prototype.nextVehicleSegment = function (info) {
        var _this = this;
        this.vehicleService.getSegmentInfoForVehicle(info.vehicle)
            .subscribe(function (d) {
            d.DestinationETA = new Date(d.DestinationETA);
            d.OriginDateTime = new Date(d.OriginDateTime);
            d.RMInfo = {
                TravelTimeInSeconds: Math.round((d.DestinationETA.getTime() - d.OriginDateTime.getTime()) / 1000)
            };
            info.segments.push(d);
            _this.googleService.googleTravelTime(d.Origin, d.Destination)
                .subscribe(function (result) {
                result.DestinationETA = new Date(d.OriginDateTime.getTime() + (result.TravelTimeInSeconds * 1000));
                d.GoogleInfo = result;
            });
        });
    };
    GPSTrackerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, services_1.VehicleService, services_1.GoogleService])
    ], GPSTrackerService);
    return GPSTrackerService;
}());
exports.GPSTrackerService = GPSTrackerService;
//# sourceMappingURL=gpstracker.service.js.map