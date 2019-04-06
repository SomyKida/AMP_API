import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  public user;
  constructor() {
    var temp = localStorage.getItem('user');
    if (temp)
      this.user = JSON.parse(temp);
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
}
