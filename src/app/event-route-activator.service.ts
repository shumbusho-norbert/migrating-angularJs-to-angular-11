import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventservice: EventsService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this.eventservice.getEvent(+route.params['id']);
    if (!eventExists) {
      this.router.navigateByUrl('/404');
    }
    return eventExists;
  }
  
}
