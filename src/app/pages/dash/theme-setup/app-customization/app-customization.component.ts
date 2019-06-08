import { ThemeSetupService } from 'src/app/services/theme-setup/theme-setup.service';
import { OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-app-customization',
  templateUrl: './app-customization.component.html',
  styleUrls: ['./app-customization.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppCustomizationComponent implements OnInit {
  primarySelected: boolean = false;
  logoSelected: boolean = false;
  currentTheme: number = 1;
  logo: string = '';
  temp_logo: string = '';
  themeNames = [
    'OMNI',
    'Omni',
    'Eclectic',
    'Eon',
    'Rogue'
  ]
  public user: User;
  public messageInput: string = '';
  public colorTheme: {
    which: boolean,
    primary: string,
    secondary: string,
    logo: string,
    img: any,
    logoType: string,
    template: any
  } = {
      which: true,
      primary: '#178aff',
      secondary: '#178aff',
      logo: '',
      img: null,
      template: '',
      logoType: 'horizontal'
    }
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(
    private credentials: CredentialService,
    public auth: AuthService,
    public router: Router,
    public aux: AuxService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }


  ngOnInit() {
  }
  fileChangeEvent(event: any, files: any): void {
    this.imageChangedEvent = event;
    this.colorTheme.logo = files[0].name;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.colorTheme.img = event.base64;
    console.log(event)
  }


  logoSet(str) {
    this.temp_logo = str;
    this.colorTheme.logoType = str;
  }
  previous() {
    if (this.logoSelected == true) {
      this.logoSelected = false;
    } else {
      this.router.navigate(['/theme/appSelect']);
    }
  }
  selectPrimary() {
    this.primarySelected = true;
    this.colorTheme.secondary = this.colorTheme.primary;
  }

  allDone() {
    if (this.colorTheme.logo == '') {
      this.aux.showAlert("Please chose a logo for your app.", "ERROR!");
      return;
    }
    else {
      if (this.colorTheme.logo == '') {
        this.aux.showAlert("Please chose a logo for your app.", "ERROR!");
        return;
      }
      var params = new FormData();
      this.colorTheme.img = "123";
      params.append('theme_info', JSON.stringify(this.colorTheme));
      // params.append('logo', this.colorTheme.img);
      this.auth.setupTemplate(params).subscribe((success) => {
        this.credentials.updateUser(success.data)
        this.router.navigate(['theme/theme-email']);
      }, (error) => {
        this.aux.errorResponse(error);
      })
    }
  }
  chosen(template) {
    this.colorTheme.template = template;
  }

  logoSelectedFun() {
    if (this.temp_logo == '' || this.temp_logo == null) {
      this.aux.showAlert("Please select a logo type to continue", "ERROR!");
    } else {
      this.logoSelected = true;
      this.logo = this.temp_logo;
    }
  }
  selection(which) {
    if (which == 'primary')
      this.colorTheme.which = true;
    else
      this.colorTheme.which = false;
  }

  changePrimary(which) {

    this.colorTheme.primary = which.color.hex;
    if (this.primarySelected == false) {
      this.colorTheme.secondary = this.colorTheme.primary;
    }
  }

  changeSecondary(which) {
    this.colorTheme.secondary = which.color.hex;

  }

}
