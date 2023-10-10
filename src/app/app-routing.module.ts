import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes/heroes-list.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
