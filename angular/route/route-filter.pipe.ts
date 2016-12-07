import { Pipe, PipeTransform } from "@angular/core"
import { RoutePattern } from "../model/subroute";

@Pipe({
    name: "routeFilter",
    pure: true
})
export class RouteFilterPipe implements PipeTransform {
    transform(value: RoutePattern[], search: string): RoutePattern[]  {
        if (!value) return value;

        return value.filter(rp => rp.SubrouteName.toUpperCase().indexOf(search.toUpperCase()) >= 0);
    }
}