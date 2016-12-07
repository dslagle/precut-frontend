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
var MapService = (function () {
    function MapService() {
        this.markers = [];
    }
    MapService.prototype.showAddresses = function (addresses) {
        var _this = this;
        var bounds = new google.maps.LatLngBounds();
        addresses.forEach(function (a) {
            console.log(a.Name);
            var pos = new google.maps.LatLng(a.Latitude, a.Longitude);
            var marker = new google.maps.Marker({
                position: pos,
                map: _this.map,
                //animation: google.maps.Animation.DROP,
                title: a.Name
            });
            var info = new google.maps.InfoWindow({
                content: a.Name
            });
            _this.markers.push(marker);
            marker.addListener("click", function () { return info.open(_this.map, marker); });
            bounds.extend(pos);
        });
        this.map.fitBounds(bounds);
    };
    MapService.prototype.clearMarkers = function () {
        this.markers.forEach(function (m) { return m.setMap(null); });
        this.markers.length = 0;
    };
    MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map