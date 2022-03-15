import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';


@Component({
    template: `<div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let myEvent of events">
                <event-thumbnail [eventThumb]=myEvent #eventThumbnails ></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
    constructor(private eventservice: EventsService, private route: ActivatedRoute) { }
    events: any;
    ngOnInit(): void {
        this.events = this.route.snapshot.data['testevents'];
    }
}