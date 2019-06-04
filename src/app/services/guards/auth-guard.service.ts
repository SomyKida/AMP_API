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
    } else if (this.auth.loggedIn()) {
      if (this.auth.selfSetup()) {
        return true;
      } else {
        if (this.auth.themeSelected()) {
          this.router.navigate(['theme/appCustomization']);
        } else {
          console.log("here")
          this.router.navigate(['setup']);
        }

        return false;
      }

    }

  }
}
