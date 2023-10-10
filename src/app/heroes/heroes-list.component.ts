import {Component, inject, OnInit} from '@angular/core';
import {Hero} from '../interfaces/hero';
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{
  private heroService = inject(HeroService);

  heroes: Hero[] = [];
  selectedHero!: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
