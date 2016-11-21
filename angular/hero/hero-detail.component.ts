import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private _heroService: HeroService,
        private _activatedRoute: ActivatedRoute,
        private _location: Location
    ) { }

    hero: Hero;

    ngOnInit(): void {
        this._activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this._heroService.getHero(id)
                .then(h => this.hero = h);
        });
    }

    goBack(): void {
        this._location.back();
    }
}