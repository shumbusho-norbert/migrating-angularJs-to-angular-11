import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ISession } from '../model/event.model';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = "";
  foundSessions!: any[];


  constructor(public authService: AuthService, private eventService: EventsService) { }
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((session: ISession[]) => {
      this.foundSessions = session;
      console.log(this.foundSessions);
    });
  }
}
