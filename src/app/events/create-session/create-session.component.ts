import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutgoingMessage } from 'http';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  @Output() saveSession =  new EventEmitter();
  @Output() cancelAddSession =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(10), this.customValidatorRestrictedWords]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
  saveNewSession(newSession: any): void {
    console.log(newSession);
    this.saveSession.emit(newSession);
  }

  cancel(){
    this.cancelAddSession.emit();
  }
  //custom validator function
  private customValidatorRestrictedWords(control: FormControl): { [key: string]: any } | null {
    return control.value.includes('foo') ? { 'customValidatorRestrictedWords': 'foo' } : null
  }
}
