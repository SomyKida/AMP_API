import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CredentialService } from '../../../services/credentials/credential.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
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
