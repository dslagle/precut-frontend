import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../model/vehicle';

@Component({
    moduleId: module.id,
    selector: "vehicle-tracker",
    templateUrl: "track-vehicle.component.html"
})
export class TrackVehicleComponent {
    @Output() onTrackVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

    selectedVehicle: Vehicle = Vehicle.Null;

    onSelectVehicle(v: Vehicle) {
        this.selectedVehicle = v;
        console.log("selection changed: " + v.Name);
    }

    onClick() {
        console.log("Track: " + this.selectedVehicle.Name);
        this.onTrackVehicle.emit(this.selectedVehicle);
    }
}