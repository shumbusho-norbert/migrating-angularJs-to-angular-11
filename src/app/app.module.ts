import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsService } from './events.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailComponent } from './events/events-detail/event-detail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsNewComponent } from './events/events-new/events-new.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { checkCreateEventFormDirtyState } from './common';
import { EventListResolverService } from './event-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/session-list/session-list.component';
import { CollapsibleWellComponent, DurationPipe, Toaster, JQ_TOKEN, TOASTR_TOKEN } from './shared/index';
import { EventModalComponent } from './shared/event-modal/event-modal.component'

declare let toastr: Toaster;
declare let $: any;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventsNewComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    EventModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    EventsService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    //{ provide: EventsService, useValue: EventsService },  This is another long way to register providers, this is also valid.
    //You could also use keyword: useClass and provide concrete class
    { provide: 'canDeactivateCreateEvent', useValue: checkCreateEventFormDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

