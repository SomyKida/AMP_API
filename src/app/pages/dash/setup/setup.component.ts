import { Component, OnInit } from '@angular/core';
import { CredentialService } from 'src/app/services/credentials/credential.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  public botOrManual: boolean = true;
  public user;
  constructor(private credentials: CredentialService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }

  ngOnInit() {
  }

  switchToManual(event) {
    this.botOrManual = false;
  }

  switchToAuto(event) {
    this.botOrManual = true;
  }

}
