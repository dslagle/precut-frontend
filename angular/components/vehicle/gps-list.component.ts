import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GPSTrackerService, VehicleService } from "../../services/services";
import { VehicleSegmentsViewModel } from "../../services/gpstrack";

@Component({
    moduleId: module.id,
    selector: "gps-list",
    templateUrl: "gps-list.component.html",
    styles: [`
        table {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid gray;
            border-collapse: collapse;
        }
        td, th {
            border: 1px solid gray;
            border-collapse: collapse;
            padding: 5px;
        }
        div {
            box-sizing: border-box;
            width: 100%;
            padding: 5px;
        }
    `]
})
export class GPSListComponent {
    JSON: any;
    constructor(private gpsService: GPSTrackerService, private vehicleService: VehicleService) { this.JSON = JSON; }

    stopTracking(info: VehicleSegmentsViewModel) {
        clearInterval(info.timer);
        info.timer = undefined;
    }

    resumeTracking(info: VehicleSegmentsViewModel) {
        this.gpsService.trackGPS(info.vehicle);
    }
}