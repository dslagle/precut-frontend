import { Vehicle } from "../model/vehicle";

export class SegmentInfo {
    OriginDateTime: Date;
    Origin: GPS;
    Destination: GPS;
    DestinationStopName: string;
    DestinationETA: Date;

    RMInfo?: RMSegmentInfo;
    GoogleInfo?: GoogleSegmentInfo;
}

export class GoogleSegmentInfo {
    TravelTimeInSeconds: number;
    DistanceInFeet: number;
    DestinationETA: Date;
}

export class RMSegmentInfo {
    TravelTimeInSeconds: number;
}

export class VehicleSegmentsViewModel {
    vehicle: Vehicle;
    segments: SegmentInfo[];
    timer: NodeJS.Timer;
}

export class GPS {
    Latitude: number;
    Longitude: number;
}