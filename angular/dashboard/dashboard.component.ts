import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ "dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {
    constructor(private _heroService: HeroService) { }

    heroes: Hero[];

    ngOnInit() {
        this._heroService.getHeroes()
            .then(hs => this.heroes = hs.slice(1, 5));
    }
}