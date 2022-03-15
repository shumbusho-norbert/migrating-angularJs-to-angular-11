import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TOASTR_TOKEN, Toaster } from '../../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  constructor(private authService: AuthService, private route: Router, @Inject(TOASTR_TOKEN) private toaster: Toaster) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstname: this.firstName,
      lastname: this.lastName
    })
  }
  save(profileValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(profileValues.firstname, profileValues.lastname);
      this.toaster.success('Profile saved','Profile');
    }
  }
  validatefName() {
    return this.firstName.valid || this.firstName.touched;
  }
  validatelName() {
    return this.lastName.valid || this.lastName.touched;
  }

}
