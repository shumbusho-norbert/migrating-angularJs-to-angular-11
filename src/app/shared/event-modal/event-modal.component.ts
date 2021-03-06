import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simple-modal',
  template: `
      <div id="simple-model" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}}</h4>
            </div>
          </div>
          <div class="modal-body">
              <ng-content></ng-content>
          </div>
        </div>
      </div>
  `,
  styles: [`
    .modal-body{heigh:250px;overflow-y:scroll;}
  `]
})
export class EventModalComponent implements OnInit {
  @Input() title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
