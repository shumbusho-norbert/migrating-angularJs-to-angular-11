import { Component, OnInit, Output } from "@angular/core";
import { EventsService } from "src/app/events.service";
import { ActivatedRoute } from '@angular/router'
import { EventEmitter } from "protractor";
import { IEvent, ISession } from "src/app/model/event.model";

@Component({
    templateUrl: './event-detail.component.html',
    selector: 'event-detail',
    styles: [
        `.container { padding-left:20px;padding-right:20px; }
         .event-image { height:100px; }
        `
    ]
})
export class EventDetailComponent implements OnInit {
    event!: any;
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    constructor(private EventService: EventsService, private route: ActivatedRoute) { }
    ngOnInit(): void {
        var paramId = Number(this.route.snapshot.params['id']);
        this.event = this.EventService.getEvent(paramId);
    }
    addSession() {
        this.addMode = true;
    }
    cancelAddSession() {
        this.addMode = false;
    }
    addNewSession(newSession: ISession) {
        console.log(newSession);
        var nextId = Math.max.apply(null, this.event.sessions.map((e: ISession) => e.id));
        newSession.id = nextId + 1;
        this.event.sessions.push(newSession);
        this.addMode = false;
    }
}