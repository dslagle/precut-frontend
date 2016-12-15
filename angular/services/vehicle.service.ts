import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Vehicle } from '../model/vehicle';
import { SegmentInfo, GPS, VehicleSegmentsViewModel } from './gpstrack';

@Injectable()
export class VehicleService {
    private GOOGLE_KEY: string = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";

    private API_URL: string = "http://localhost:9000/data";
    private GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
    
    info: VehicleSegmentsViewModel[] = [];

    constructor(private http: Http) { }

    getVehicles(): Observable<Vehicle[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.get(`${this.API_URL}/vehicle`, { headers: headers })
            .map((data: any) => <string[]>JSON.parse(data._body))
            .catch(err => Observable.throw(err));
    }

    getSegmentInfoForVehicle(v: Vehicle): Observable<SegmentInfo> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.API_URL}/vehicle/${v.VehicleID}/gps`;
        
        return this.http.get(url, { headers: headers })
            .map((response: Response) => {
                let data: SegmentInfo = response.json();
                return data;
            })
            .catch(err => Observable.throw(err));
    }
}