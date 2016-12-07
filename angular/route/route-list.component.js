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
var map_service_1 = require("../map/map.service");
var data_service_1 = require("../model/data.service");
var RouteListComponent = (function () {
    function RouteListComponent(mapService, data) {
        this.mapService = mapService;
        this.data = data;
        this.searchText = "";
    }
    RouteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getRoutes()
            .subscribe(function (routes) {
            _this.routes = routes;
        });
    };
    RouteListComponent.prototype.onSelect = function (route) {
        var _this = this;
        this.selectedRoute = route;
        this.mapService.clearMarkers();
        this.data.getRouteAddresses(route.SubrouteID)
            .subscribe(function (addresses) {
            _this.mapService.showAddresses(addresses);
        });
    };
    RouteListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "route-list",
            templateUrl: "route-list.component.html",
            styleUrls: ["route-list.component.css"]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService, data_service_1.DataService])
    ], RouteListComponent);
    return RouteListComponent;
}());
exports.RouteListComponent = RouteListComponent;
//# sourceMappingURL=route-list.component.js.map