import {Component, inject, Input, OnInit} from '@angular/core';
import {Hero} from "../interfaces/hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  @Input({ required: true }) hero!: Hero;

  private route = inject(ActivatedRoute);
  private heroService = inject(HeroService);
  private location = inject(Location);

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe((hero: any) => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
