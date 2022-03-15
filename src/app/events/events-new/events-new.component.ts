import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';



@Component({
  selector: 'new-events',
  templateUrl: './events-new.component.html',
  styleUrls: ['./events-new.component.css']
})
export class EventsNewComponent implements OnInit {
  newEvent!: any;
  isFormDirty: boolean = true;
  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigateByUrl('/events');
  }
  saveEvent(newEvent: any) {
    this.isFormDirty = false;
    this.eventService.saveEvent(newEvent);
    this.router.navigateByUrl('/events');
  }
  cancel() {

  }
}
