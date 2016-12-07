import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { MapService } from "./map.service";
import { Observable } from "rxjs/Rx";
import { DataService } from "../model/data.service";

@Component({
    moduleId: module.id,
    selector: "my-map",
    templateUrl: "map.component.html",
    styleUrls: [ "map.component.css" ]
})
export class MapComponent implements OnInit {
    constructor(private mapService: MapService, private data: DataService) { }
    
    ngOnInit(): void {
        this.mapService.map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: {
                    lng: -84.3884003,
                    lat: 33.7503117
                },
                zoom: 14
            }
        );
    }
}