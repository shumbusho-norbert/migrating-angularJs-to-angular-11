import { isEmptyExpression, ReturnStatement } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/model/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions!: ISession[];
  @Input() filterBy!: string;
  @Input() sortBy!: string;

  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }
  }
  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }
  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }
} 
