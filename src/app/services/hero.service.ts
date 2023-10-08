import {inject, Injectable} from '@angular/core';
import {Hero} from "../interfaces/hero";
import {HEROES} from "../mock/heroes.mock";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private messageService = inject(MessageService);

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
