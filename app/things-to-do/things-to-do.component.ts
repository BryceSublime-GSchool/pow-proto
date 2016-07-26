import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'the-trip',
  template: `
    <div class="content-box"></div>
    <router-outlet></router-outlet>
  `,
})

export class ThingsToDoComponent {
  constructor(
    private router: Router) {
  }

}
