"use strict";
var router_1 = require('@angular/router');
var mountain_component_1 = require('./the-mountain/mountain.component');
var trip_component_1 = require('./the-trip/trip.component');
var things_to_do_component_1 = require('./things-to-do/things-to-do.component');
var home_component_1 = require('./home/home.component');
var mountain_detail_component_1 = require('./the-mountain/mountain-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'the-mountain',
        component: mountain_component_1.MountainComponent
    },
    {
        path: 'the-trip',
        component: trip_component_1.TripComponent
    },
    {
        path: 'things-to-do',
        component: things_to_do_component_1.ThingsToDoComponent
    },
    {
        path: 'mountain-detail',
        component: mountain_detail_component_1.MountainDetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map