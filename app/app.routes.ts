import { provideRouter, RouterConfig }  from '@angular/router';

import { MountainComponent } from './the-mountain/mountain.component';
import { TripComponent } from './the-trip/trip.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { HomeComponent } from './home/home.component';
import { MountainDetailComponent } from './the-mountain/mountain-detail.component';



const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'the-mountain',
    component: MountainComponent
  },
  {
    path: 'the-trip',
    component: TripComponent
  },
  {
    path: 'things-to-do',
    component: ThingsToDoComponent
  },
  {
    path: 'mountain-detail',
    component: MountainDetailComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];
