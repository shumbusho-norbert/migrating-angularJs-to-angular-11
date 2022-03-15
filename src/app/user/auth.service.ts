import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;
  constructor() { }
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName: userName
    }
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(fname: string, lname: string) {
    this.currentUser.firstName = fname;
    this.currentUser.lastName = lname;
  }

}
