import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabComponent } from './components/tabs/tab.component';
import {HomeComponent} from './components/tabs/home/home.component';
import { TeamsComponent } from './components/tabs/teams/teams.component';
import { TeamComponent } from './components/tabs/teams/team/team.component';
import { MatchesComponent } from './components/tabs/matches/matches.component';

import { HttpClientModule } from '@angular/common/http';
import {DataService} from './services/app-data-service';
import {Configuration} from './app.constants';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    SidebarComponent,
    TabComponent,
    TeamsComponent,
    TeamComponent,
    MatchesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Configuration, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
