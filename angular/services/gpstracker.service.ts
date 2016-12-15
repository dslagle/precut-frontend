import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Vehicle } from '../model/vehicle';
import { VehicleSegmentsViewModel, GPS, SegmentInfo, GoogleSegmentInfo } from './gpstrack';
import { VehicleService, GoogleService } from "./services";

@Injectable()
export class GPSTrackerService {
    private GOOGLE_KEY: string = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";

    private API_URL: string = "http://localhost:9000/data";
    private GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
    
    constructor(private http: Http, private vehicleService: VehicleService, private googleService: GoogleService) { }

    getVehicles(): Observable<Vehicle[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.get(`${this.API_URL}/vehicle`, { headers: headers })
            .map((data: any) => <string[]>JSON.parse(data._body))
            .catch(err => Observable.throw(err));
    }

    trackGPS(v: Vehicle) {
        let root = this.vehicleService.info.find(i => i.vehicle.VehicleID === v.VehicleID);
        if (!root) {
            root = new VehicleSegmentsViewModel();
            root.vehicle = v;
            root.segments = [];
            this.vehicleService.info.push(root);
        }

        this.nextVehicleSegment(root);

        root.timer = root.timer || setInterval(() => {
            this.nextVehicleSegment(root);
        }, 10000);
    }

    nextVehicleSegment(info: VehicleSegmentsViewModel) {
        this.vehicleService.getSegmentInfoForVehicle(info.vehicle)
            .subscribe((d: SegmentInfo) => {
                d.DestinationETA = new Date(d.DestinationETA);
                d.OriginDateTime = new Date(d.OriginDateTime);

                d.RMInfo = {
                    TravelTimeInSeconds: Math.round((d.DestinationETA.getTime() - d.OriginDateTime.getTime()) / 1000)
                };
                
                info.segments.push(d);
                this.googleService.googleTravelTime(d.Origin, d.Destination)
                    .subscribe(result => {
                        result.DestinationETA = new Date(d.OriginDateTime.getTime() + (result.TravelTimeInSeconds * 1000));
                        d.GoogleInfo = result;
                    });
            });
    }
}