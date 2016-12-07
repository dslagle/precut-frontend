import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Address } from '../model/address';

@Injectable()
export class MapService {
    map: google.maps.Map;
    private markers: google.maps.Marker[] = [];

    showAddresses(addresses: Address[]) {
        let bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds();

        addresses.forEach(a => {
            console.log(a.Name);
            let pos = new google.maps.LatLng(a.Latitude, a.Longitude);
            let marker = new google.maps.Marker({
                position: pos,
                map: this.map,
                //animation: google.maps.Animation.DROP,
                title: a.Name
            });

            let info = new google.maps.InfoWindow({
                content: a.Name
            });

            this.markers.push(marker);
            marker.addListener("click", () => info.open(this.map, marker));

            bounds.extend(pos);
        });

        this.map.fitBounds(bounds);
    }

    clearMarkers() {
        this.markers.forEach(m => m.setMap(null));
        this.markers.length = 0;
    }
}