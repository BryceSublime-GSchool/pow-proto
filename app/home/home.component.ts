import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <div class="content-box-hero">

    </div>
    <router-outlet></router-outlet>
  `,
})

export class HomeComponent {
  constructor(
    private router: Router) {
  }

}
