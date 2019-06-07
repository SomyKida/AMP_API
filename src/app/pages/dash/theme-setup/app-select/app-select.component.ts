import { Component, OnInit } from '@angular/core';
import { ThemeSetupService } from 'src/app/services/theme-setup/theme-setup.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
@Component({
  selector: 'app-app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss']
})
export class AppSelectComponent implements OnInit {
  public user: any;
  constructor(
    private themeService: ThemeSetupService,
    private router: Router,
    private AuthService: AuthService,
    private AuxService: AuxService,
    private credentials: CredentialService
  ) {
    this.user = credentials.user;
    if (this.user.first_setup == false) {
      this.router.navigate(["/setup"])
    }
  }

  ngOnInit() {

  }
  previous() {
    this.router.navigate(['setup'])
  }

  selected(id) {
    const params = {
      'updates': ['theme'],
      'theme': 'Omni'
    }
    this.AuthService.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.themeService.updateSelectedTheme(id);
        this.router.navigate(['theme/appCustomization']);
      }
    }, (err) => {
      this.AuxService.errorResponse(err);
    })


  }
}
