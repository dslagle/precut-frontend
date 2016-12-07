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
var core_1 = require("@angular/core");
var map_service_1 = require("./map.service");
var data_service_1 = require("../model/data.service");
var MapComponent = (function () {
    function MapComponent(mapService, data) {
        this.mapService = mapService;
        this.data = data;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.mapService.map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lng: -84.3884003,
                lat: 33.7503117
            },
            zoom: 14
        });
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-map",
            templateUrl: "map.component.html",
            styleUrls: ["map.component.css"]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService, data_service_1.DataService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map