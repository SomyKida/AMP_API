import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  public token;
  public user;
  constructor() {
    this.token = localStorage.getItem('token');
    var temp = localStorage.getItem('user');
    if (temp)
      this.user = JSON.parse(temp);
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.access_token);
    this.token = user.access_token;
    this.user = user;
  }

  logout() {
    localStorage.clear();
    this.user = null;
    this.token = null;
  }

  loggedIn() {
    if (this.token && this.user) {
      return true;
    } else {
      return false;
    }
  }
}
