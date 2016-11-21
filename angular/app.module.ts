import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroService }   from './hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ], { useHash: true })
  ],
  providers:    [ HeroService ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }