import { Component, OnInit } from '@angular/core';
import { GPSTrackerService } from './services/services';
import { Vehicle } from "./model/vehicle";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html"
    //styleUrls: [ "app.component.css" ]
})
export class AppComponent {
    constructor(private gpsTrackerService: GPSTrackerService) { }

    title: string = "ETA Tracker";

    onTrackVehicle(v: Vehicle) {
        console.log("Track Root: " + v.Name);
        this.gpsTrackerService.trackGPS(v);
    }
}