import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroService }   from './hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskService } from './task/task.service';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list.component';
import { JiraService } from './jira/jira.service';
import { HttpModule} from '@angular/http';
import { ReleaseInputComponent } from './jira/release-input.component';
import { MapComponent } from './map/map.component';
import { RouteListComponent } from './route/route-list.component';
import { MapService } from './map/map.service';
import { DataService } from './model/data.service';
import { RouteFilterPipe } from './route/route-filter.pipe';

import { FormatTimePipe, TrackVehicleComponent, GPSListComponent, VehicleInputComponent } from "./components/components";
import { VehicleService, GPSTrackerService, GoogleService } from "./services/services";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TaskService,
    JiraService,
    MapService,
    DataService,
    VehicleService,
    GPSTrackerService,
    GoogleService
  ],
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    ReleaseInputComponent,
    MapComponent,
    RouteListComponent,
    RouteFilterPipe,
    VehicleInputComponent,
    TrackVehicleComponent,
    GPSListComponent,
    FormatTimePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }