import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: "timeFormat",
    pure: true
})
export class FormatTimePipe implements PipeTransform {
    transform(value: number): string  {
        if (!value) return "";

        let temp = Math.abs(value);
        let hours = Math.floor(temp / 3600);
        temp = temp - (hours * 3600);
        let minutes = Math.floor(temp / 60);
        let seconds = temp - (minutes * 60);

        return `${hours}h ${minutes}m ${seconds}s`;
    }
}