import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'the-mountain',
  template: `
    <div class="content-box">
      <div class="hero-stats-container">
        <div class="hero-stats"></div>
        <div class="hero-stats"></div>
        <div class="hero-stats"></div>
        <div class="hero-stats"></div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,

})

export class MountainComponent {
  constructor(
    private router: Router) {
  }

}
