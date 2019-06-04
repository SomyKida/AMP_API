import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
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

  updateUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.sessionStatus.next(this.user);
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

  themeSelected() {
    if (this.user.theme == null || this.user.theme == '') {
      return false
    } else {
      return true
    }
  }

  selfSetup() {
    console.log(this.user);
    if (this.user.first_setup == true && this.user.theme_setup == true) {
      return true;
    } else
      return false;
  }
}
