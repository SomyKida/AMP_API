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

  constructor(private credentials: CredentialService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }

  ngOnInit() {
  }

  manual() {
    this.proceed.emit('manual');
  }

}
