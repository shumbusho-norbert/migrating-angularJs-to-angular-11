import { Component, Input, OnInit } from '@angular/core';


@Component({
    template: `<div (click)="toggleContent()" class="well pointable">
                    <h4>
                        <ng-content select="[well-title]"></ng-content>
                    </h4>
                    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
                </div>`,
    selector: "Collapsible-Well"
})
export class CollapsibleWellComponent implements OnInit {
    @Input() title: string = "";
    visible: boolean = false;
    ngOnInit(): void {
    }
    toggleContent() {
        this.visible = !this.visible;
    }

}