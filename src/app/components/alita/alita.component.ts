import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { CredentialService } from 'src/app/services/credentials/credential.service';

@Component({
  selector: 'app-alita',
  templateUrl: './alita.component.html',
  styleUrls: ['./alita.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlitaComponent implements OnInit {
  @Output('switch') proceed = new EventEmitter<any>();
  public user: User;
  public colorTheme: {
    which: boolean,
    primary: string,
    secondary: string,
    logo: string,
    img: any
  } = {
      which: true,
      primary: '#178aff',
      secondary: '#08ccff',
      logo: '',
      img: null
    }
  constructor(private credentials: CredentialService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }

  ngOnInit() {
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
    console.log(image);
    this.colorTheme.logo = image[0].name;
    var reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e);
      this.colorTheme.img = e.target.result;
    }
    reader.readAsDataURL(image[0])
  }

  manual() {
    this.proceed.emit('manual');
  }

}
