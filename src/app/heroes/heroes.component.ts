import {Component, inject} from '@angular/core';
import { Hero } from '../interfaces/hero';
import {FormBuilder, FormControl} from "@angular/forms";
import {HEROES} from "../mock/heroes.mock";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  private fb = inject(FormBuilder);

  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
