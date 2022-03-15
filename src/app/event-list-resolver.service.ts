import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventsService } from './events.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any>{
  constructor(private eventService: EventsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
