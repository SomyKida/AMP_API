import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  public token;
  public user;
  public isLoggedIn = new Subject<boolean>();
  public tempUser = new Subject<any>();
  constructor() {
    this.token = localStorage.getItem('token');
    var temp = localStorage.getItem('user');
    if (temp) {
      this.user = JSON.parse(temp);
      this.tempUser.next(this.user)
      this.isLoggedIn.next(true)
    }

  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.access_token);
    this.token = user.access_token;
    this.user = user;
    this.isLoggedIn.next(true);
    this.tempUser.next(this.user)

  }

  logout() {
    localStorage.clear();
    this.user = null;
    this.token = null;
    this.tempUser.next(this.user)
    this.isLoggedIn.next(false)
  }

  loggedIn() {
    if (this.token && this.user) {
      return true;
    } else {
      return false;
    }
  }
}
