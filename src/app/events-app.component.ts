import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router'

@Component({
  selector: 'events-app',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <div *ngIf="showLoadingIndication" class="spinner"></div>
  `,
  styles: [
   `
      .spinner {
        border: 16px solid silver;
        border-top: 16px solid #337AB7;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 700ms linear infinite;
        top:50%;
        left:50%;
        position: absolute;
      }
      @keyframes spin {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
      }
    `
  ]
})
export class EventsAppComponent {
  showLoadingIndication: boolean = true;
  constructor(private eventRoute: Router) {
    this.eventRoute.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.showLoadingIndication = true;
      }
      else if (routeEvent instanceof NavigationEnd
        || routeEvent instanceof NavigationError
        || routeEvent instanceof NavigationCancel) {
        this.showLoadingIndication = false;
      }
    });
  }
}
