import { Component, OnInit } from '@angular/core';
import { ThemeSetupService } from 'src/app/services/theme-setup/theme-setup.service';
import { CredentialService } from 'src/app/services/credentials/credential.service';

@Component({
  selector: 'app-app-customization',
  templateUrl: './app-customization.component.html',
  styleUrls: ['./app-customization.component.scss']
})
export class AppCustomizationComponent implements OnInit {

  currentTheme: number = 1;
  themeNames = [
    'Ashen',
    'Omni',
    'Eclectic',
    'Eon',
    'Rogue'
  ]

  public botOrManual: boolean = true;
  public user;
  constructor(
    private credentials: CredentialService,
    private themeService: ThemeSetupService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }

  ngOnInit() {
    this.currentTheme = this.themeService.getSelectedTheme();
    console.log(this.currentTheme);
  }
  switchToManual(event) {
    this.botOrManual = false;
  }

  switchToAuto(event) {
    this.botOrManual = true;
  }

}
