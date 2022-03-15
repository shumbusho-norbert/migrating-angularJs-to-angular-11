import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EventListResolverService } from './event-list-resolver.service';
import { EventRouteActivatorService } from './event-route-activator.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';

import { EventDetailComponent } from './events/events-detail/event-detail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsNewComponent } from './events/events-new/events-new.component';

const appRoutes: Routes = [
  { path: '404', component: ErrorComponent },
  { path: 'events/new', component: EventsNewComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { testevents: EventListResolverService } },
  { path: 'event/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
