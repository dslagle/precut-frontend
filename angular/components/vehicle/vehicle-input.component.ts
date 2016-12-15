import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../model/vehicle';

@Component({
    moduleId: module.id,
    selector: "vehicle-selector",
    templateUrl: "vehicle-input.component.html",
    styleUrls: [ "vehicle-input.component.css" ]
})
export class VehicleInputComponent implements OnInit {
    constructor(private vehicleService: VehicleService) { }

    vehicles: Vehicle[];

    @Output() onSelection: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

    selectedVehicle: Vehicle = Vehicle.Null;

    ngOnInit(): void {
        this.vehicleService.getVehicles()
            .subscribe((data) => {
                this.vehicles = data.sort();
                console.log("Real Value");
                this.selectedVehicle = this.selectedVehicle || this.vehicles[0];
            });
    }

    onSelectVehicle(v: Vehicle) {
        this.selectedVehicle = v;

        this.onSelection.emit(v);
    }
}