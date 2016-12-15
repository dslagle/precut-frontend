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
var vehicle_1 = require('../../model/vehicle');
var TrackVehicleComponent = (function () {
    function TrackVehicleComponent() {
        this.onTrackVehicle = new core_1.EventEmitter();
        this.selectedVehicle = vehicle_1.Vehicle.Null;
    }
    TrackVehicleComponent.prototype.onSelectVehicle = function (v) {
        this.selectedVehicle = v;
        console.log("selection changed: " + v.Name);
    };
    TrackVehicleComponent.prototype.onClick = function () {
        console.log("Track: " + this.selectedVehicle.Name);
        this.onTrackVehicle.emit(this.selectedVehicle);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TrackVehicleComponent.prototype, "onTrackVehicle", void 0);
    TrackVehicleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "vehicle-tracker",
            templateUrl: "track-vehicle.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], TrackVehicleComponent);
    return TrackVehicleComponent;
}());
exports.TrackVehicleComponent = TrackVehicleComponent;
//# sourceMappingURL=track-vehicle.component.js.map