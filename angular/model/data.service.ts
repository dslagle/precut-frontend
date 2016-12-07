import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Address } from "../model/address";
import { Observable } from 'rxjs/Rx';

import { RoutePattern } from '../model/subroute';

@Injectable()
export class DataService {
    constructor(private http: Http) { }
    
    getAddresses(): Observable<Address[]> {
        return this.http.get("http://localhost:9000/data/address")
            .map((response) => response.json())
    }

    getRouteAddresses(routeId: number): Observable<Address[]> {
        return this.http.get(`http://localhost:9000/data/route/${routeId}/address`)
            .map((response) => response.json())
    }

    getRoutes(): Observable<RoutePattern[]> {
        return this.http.get(`http://localhost:9000/data/route`)
            .map((response) => response.json())
    }
}