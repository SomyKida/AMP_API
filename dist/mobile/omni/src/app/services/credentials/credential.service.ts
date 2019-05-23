import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  public token;
  public user: User;
  public sessionStatus = new Subject<any>();
  constructor() {
    this.token = localStorage.getItem('token');
    var temp = localStorage.getItem('user');
    if (temp) {
      this.user = JSON.parse(temp);
    }

  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.access_token);
    this.token = user.access_token;
    this.user = user;
    this.sessionStatus.next(this.user);
  }

  logout() {
    localStorage.clear();
    this.user = null;
    this.token = null;
    this.sessionStatus.next(null)
  }

  loggedIn() {
    if (this.token && this.user) {
      if (this.user.init_payment == true)
        return true;
      else
        return false;
    } else {
      return false;
    }
  }

  selfSetup() {
    if (this.user.first_setup == true && this.user.theme_setup == true) {
      return true;
    } else
      return false;
  }
}
