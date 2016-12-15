import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GPS, GoogleSegmentInfo } from './gpstrack';

@Injectable()
export class GoogleService {
    private GOOGLE_KEY: string = "AIzaSyA3PCYWq3Dj7YpI2xlimqVxGi8igFmsPbs";

    private GOOGLE_DISTANCE_MATRIX_URL = "https://maps.googleapis.com/maps/api/distancematrix/json";
    
    constructor(private http: Http) { }

    googleTravelTime(origin: GPS, destination: GPS): Observable<GoogleSegmentInfo> {
        console.log(origin);
        console.log(destination);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.GOOGLE_DISTANCE_MATRIX_URL}?units=imperial&origins=${origin.Latitude},${origin.Longitude}&destinations=${destination.Latitude},${destination.Longitude}&key=${this.GOOGLE_KEY}`;

        console.log(url);
        return this.http.get(url, { headers: headers })
            .map((response: Response) => {
                let data = response.json();
                console.log(data);
                return {
                    TravelTimeInSeconds: data.rows[0].elements[0].duration.value,
                    DistanceInFeet: data.rows[0].elements[0].distance.value
                }
            })
            .catch(err => Observable.throw(err));
    }
}