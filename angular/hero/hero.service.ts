import { Injectable } from "@angular/core";
import { HEROES } from "./hero.data";
import { Hero } from "./hero";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: Number): Promise<Hero> {
        return this.getHeroes().then(
            heroes => heroes.find(h => h.id === id)
        )
    }
}