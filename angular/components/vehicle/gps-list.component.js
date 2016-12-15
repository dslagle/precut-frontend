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
var services_1 = require("../../services/services");
var GPSListComponent = (function () {
    function GPSListComponent(gpsService, vehicleService) {
        this.gpsService = gpsService;
        this.vehicleService = vehicleService;
        this.JSON = JSON;
    }
    GPSListComponent.prototype.stopTracking = function (info) {
        clearInterval(info.timer);
        info.timer = undefined;
    };
    GPSListComponent.prototype.resumeTracking = function (info) {
        this.gpsService.trackGPS(info.vehicle);
    };
    GPSListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "gps-list",
            templateUrl: "gps-list.component.html",
            styles: ["\n        table {\n            box-sizing: border-box;\n            width: 100%;\n            border: 1px solid gray;\n            border-collapse: collapse;\n        }\n        td, th {\n            border: 1px solid gray;\n            border-collapse: collapse;\n            padding: 5px;\n        }\n        div {\n            box-sizing: border-box;\n            width: 100%;\n            padding: 5px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [services_1.GPSTrackerService, services_1.VehicleService])
    ], GPSListComponent);
    return GPSListComponent;
}());
exports.GPSListComponent = GPSListComponent;
//# sourceMappingURL=gps-list.component.js.map