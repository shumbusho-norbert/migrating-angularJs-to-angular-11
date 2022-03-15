import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.route.navigateByUrl('/events');
  }
  onCancel() {
    this.route.navigateByUrl('/events');
  }
}
