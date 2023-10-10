import {Component, inject, OnInit} from '@angular/core';
import { Hero } from '../interfaces/hero';
import {FormBuilder, FormControl} from "@angular/forms";
import {HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{
  private fb = inject(FormBuilder);
  private heroService = inject(HeroService);
  private messageService = inject(MessageService);

  heroes: Hero[] = [];
  selectedHero!: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
