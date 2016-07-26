import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MountainComponent } from './the-mountain/mountain.component'
import { TripComponent } from './the-trip/trip.component'
import { ThingsToDoComponent } from './things-to-do/things-to-do.component'
import { HomeComponent } from './home/home'
import { MountainDetailComponent } from './the-mountain/mountain-detail.component'

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['/']" routerLinkActive="active">
        <img src="./app/assets/boreal.png">
      </a>
      <a [routerLink]="['/the-mountain']" routerLinkActive="active">The Mountain</a>
      <a [routerLink]="['/the-trip']" routerLinkActive="active">The Trip</a>
      <a [routerLink]="['/things-to-do']" routerLinkActive="active">Things to Do</a>
    </nav>
    <router-outlet> </router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
