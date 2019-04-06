import { Injectable } from '@angular/core';
import { CredentialService } from '../credentials/credential.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: CredentialService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['plan']);
      return false;
    }
    return true;
  }
}
