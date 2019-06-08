import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() display: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter<any>()
  public currentPage = '';
  public user: User;
  constructor(public router: Router, public loc: Location, public credentials: CredentialService) {
    this.user = this.credentials.user;
    this.credentials.sessionStatus.subscribe(value => {
      this.user = value
    })
  }

  ngOnInit() {
    this.currentPage = this.loc.path();
  }

  goTo(page) {
    if (page == 'login') {
      this.currentPage = '/login';
      this.router.navigate(["/login"]);
    } else if (this.user != null && this.user.init_payment == true) {
      if (page == 'chat') {
        this.currentPage = '/chat';
        this.router.navigate(["/chat"]);
      } else if (page == 'dashboard') {
        this.currentPage = '/home';
        this.router.navigate(["/home"]);
      }
    }
  }

  hide() {
    if (window.innerWidth < 720) {
      this.close.emit('closeIt');
    }
  }

  logout() {
    this.credentials.logout();
    this.router.navigate(['/login']);
  }

}
