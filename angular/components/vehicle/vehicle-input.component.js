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
var vehicle_service_1 = require('../../services/vehicle.service');
var vehicle_1 = require('../../model/vehicle');
var VehicleInputComponent = (function () {
    function VehicleInputComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.onSelection = new core_1.EventEmitter();
        this.selectedVehicle = vehicle_1.Vehicle.Null;
    }
    VehicleInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getVehicles()
            .subscribe(function (data) {
            _this.vehicles = data.sort();
            console.log("Real Value");
            _this.selectedVehicle = _this.selectedVehicle || _this.vehicles[0];
        });
    };
    VehicleInputComponent.prototype.onSelectVehicle = function (v) {
        this.selectedVehicle = v;
        this.onSelection.emit(v);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VehicleInputComponent.prototype, "onSelection", void 0);
    VehicleInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "vehicle-selector",
            templateUrl: "vehicle-input.component.html",
            styleUrls: ["vehicle-input.component.css"]
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
    ], VehicleInputComponent);
    return VehicleInputComponent;
}());
exports.VehicleInputComponent = VehicleInputComponent;
//# sourceMappingURL=vehicle-input.component.js.map