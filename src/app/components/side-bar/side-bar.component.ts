import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public currentPage = '';
  constructor(public router: Router, public loc: Location) { }

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

}
