import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'the-trip',
  template: `
    <div class="content-box"></div>
    <router-outlet></router-outlet>
  `,
})

export class TripComponent {
  constructor(
    private router: Router) {
  }

}
