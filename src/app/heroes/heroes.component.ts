import {Component, inject} from '@angular/core';
import { Hero } from '../interfaces/hero';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  private fb = inject(FormBuilder);

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
