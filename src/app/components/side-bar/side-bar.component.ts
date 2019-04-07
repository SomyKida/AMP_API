import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CredentialService } from 'src/app/services/credentials/credential.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public currentPage = '';
  public isLoggedIn: boolean = false
  constructor(public router: Router, public loc: Location, public credentials: CredentialService) {
    if (this.credentials.user != null)
      this.isLoggedIn = true
    this.credentials.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value
    })
  }

  ngOnInit() {
    this.currentPage = this.loc.path();
  }

  goTo(page) {
    if (page == 'login') {
      this.currentPage = '/login';
      this.router.navigate(["/login"]);
    } else if (page == 'chat') {
      this.currentPage = '/chat';
      this.router.navigate(["/chat"]);
    } else if (page == 'dashboard') {
      this.currentPage = '/home';
      this.router.navigate(["/home"]);
    }
  }

  logout() {
    this.credentials.logout();
    this.router.navigate(['/plan']);
  }

}
