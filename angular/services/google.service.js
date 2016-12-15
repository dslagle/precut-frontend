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
var GoogleService = (function () {
    function GoogleService(http) {
        this.http = http;
        this.GOOGLE_KEY = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";
        this.GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
    }
    GoogleService.prototype.googleTravelTime = function (origin, destination) {
        console.log(origin);
        console.log(destination);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.GOOGLE_DISTANCE_MATRIX_URL + "?units=imperial&origins=" + origin.Latitude + "," + origin.Longitude + "&destinations=" + destination.Latitude + "," + destination.Longitude + "&key=" + this.GOOGLE_KEY;
        console.log(url);
        return this.http.get(url, { headers: headers })
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return {
                TravelTimeInSeconds: data.rows[0].elements[0].duration.value,
                DistanceInFeet: data.rows[0].elements[0].distance.value
            };
        })
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    GoogleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GoogleService);
    return GoogleService;
}());
exports.GoogleService = GoogleService;
//# sourceMappingURL=google.service.js.map