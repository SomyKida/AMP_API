import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alita',
  templateUrl: './alita.component.html',
  styleUrls: ['./alita.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlitaComponent implements OnInit {
  @Output('switch') proceed = new EventEmitter<any>();
  public user: User;
  public messageInput: string = '';
  public colorTheme: {
    which: boolean,
    primary: string,
    secondary: string,
    logo: string,
    img: any,
    template: any
  } = {
      which: true,
      primary: '#178aff',
      secondary: '#08ccff',
      logo: '',
      img: null,
      template: ''
    }
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

  chosen(template) {
    this.colorTheme.template = template;
  }

  selection(which) {
    if (which == 'primary')
      this.colorTheme.which = true;
    else
      this.colorTheme.which = false;
  }

  changePrimary(which) {
    this.colorTheme.primary = which.color.hex;
  }

  changeSecondary(which) {
    this.colorTheme.secondary = which.color.hex;
  }

  processFile(image) {
    this.colorTheme.logo = image[0].name;
    var reader = new FileReader();
    reader.onload = (e: any) => {
      this.colorTheme.img = e.target.result;
    }
    reader.readAsDataURL(image[0])
  }

  manual() {
    if (this.user.first_setup) {
      if (this.user.theme != '' && this.user.theme != null) {
        this.router.navigate(['theme/appCustomization']);
      } else {
        this.router.navigate(['theme/appSelect']);
      }
    } else {
      this.proceed.emit('manual');
    }

  }

  alitaSend() {
    if (this.messageInput === 'yes' || this.messageInput === 'Yes' || this.messageInput === 'YES') {
      this.manual();
    }
  }
  saveTemplate() {
    if (this.colorTheme.logo == '') {
      this.aux.showAlert("Please chose a logo for your app.", "ERROR!");
      return;
    }
    var params = new FormData();
    params.append('primary_color', this.colorTheme.primary);
    params.append('secondary_color', this.colorTheme.secondary);
    params.append('theme', this.colorTheme.template.name);
    params.append('logo', this.colorTheme.img);
    this.auth.setupTemplate(params).subscribe((success) => {
      this.credentials.setUser(success.data);
      this.router.navigate(['/home']);
    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

}
