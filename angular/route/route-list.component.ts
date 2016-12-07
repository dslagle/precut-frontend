import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { MapService } from "../map/map.service";
import { Observable } from "rxjs/Rx";

import { DataService } from "../model/data.service";
import { RoutePattern } from "../model/subroute";

@Component({
    moduleId: module.id,
    selector: "route-list",
    templateUrl: "route-list.component.html",
    styleUrls: [ "route-list.component.css" ]
})
export class RouteListComponent implements OnInit {
    routes: RoutePattern[];
    selectedRoute: RoutePattern;
    searchText: string = "";
    
    constructor(private mapService: MapService, private data: DataService) { }
    
    ngOnInit(): void {
        this.data.getRoutes()
            .subscribe((routes) => {
                this.routes = routes;
            });
    }

    onSelect(route: RoutePattern): void {
        this.selectedRoute = route;

        this.mapService.clearMarkers();

        this.data.getRouteAddresses(route.SubrouteID)
            .subscribe((addresses) => {
                this.mapService.showAddresses(addresses);
            });
    }
}