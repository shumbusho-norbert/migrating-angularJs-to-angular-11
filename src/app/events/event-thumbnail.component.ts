import { Component, Input } from '@angular/core';


@Component({
    template: `<div class="well hoverwell thumbnail" [routerLink]="['/event', eventThumb.id]">
                    <h2>{{eventThumb.name | uppercase}}</h2>
                    <div [ngStyle]="getDivStyle()">Date:{{eventThumb.date}}</div>
                    <div>Time:{{eventThumb.time}}</div>
                    <div>Price:\${{eventThumb.price}}</div>
                    <div *ngIf="eventThumb?.location">
                        <span>Location:{{eventThumb.location.address}}</span>
                        <span class="pad-left">{{eventThumb.location.city}},{{eventThumb.location.country}}</span>
                    </div>
                    <div *ngIf="eventThumb?.online">
                        <span>Online:{{eventThumb.online}}</span>
                    </div>
              </div>`,
    selector: 'event-thumbnail',
    styles: [`
      .rah {color:yellow !important;}
      .thumbnail {min-height:210px;}
      .pad-left {margin-left:10px;}
      .well div {color:#bbb;}   
    `]
})
export class EventThumbnailComponent {
    @Input() eventThumb: any;
    getDivStyle(): any {
        if (this.eventThumb.time == '8:00 am')
            return { color: '#003399', 'font-weight': 'bold' }
        return {}
    }
}

