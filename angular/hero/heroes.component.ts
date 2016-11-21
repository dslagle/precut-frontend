import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from "./hero.service";

@Component({
    moduleId: module.id,
    selector: "heroes",
    templateUrl: "heroes.component.html",
    styleUrls: [ "heroes.component.css" ]
})
export class HeroesComponent implements OnInit {
    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) { }

    heroes: Hero[];
    selectedHero: Hero;
    
    onSelect(h: Hero): void {
        this.selectedHero = h;
    }

    gotoDetail(h: Hero) {
        this._router.navigate(['/detail', h.id]);
    }

    ngOnInit() {
        this._heroService.getHeroes().then(hs => this.heroes = hs);
    }
}