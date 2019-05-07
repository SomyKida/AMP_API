import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { CredentialService } from 'src/app/services/credentials/credential.service';

@Component({
  selector: 'app-alita',
  templateUrl: './alita.component.html',
  styleUrls: ['./alita.component.scss']
})
export class AlitaComponent implements OnInit {
  @Output('switch') proceed = new EventEmitter<any>();
  public user: User;
  public colorTheme: { which: boolean, primary: string, secondary: string } = {
    which: true,
    primary: '#39d4ff',
    secondary: '#f2f2f2'
  }

  public color = '#39d4ff';
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

  changeColor() {
    console.log(this.colorTheme.secondary);
  }

  manual() {
    this.proceed.emit('manual');
  }

}
