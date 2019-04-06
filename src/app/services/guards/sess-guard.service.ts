import { Injectable } from '@angular/core';
import { CredentialService } from '../credentials/credential.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessGuardService implements CanActivate {

  constructor(public auth: CredentialService, public router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
