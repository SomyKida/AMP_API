import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public whichTab: string = 'login';
  constructor(public router: Router) { }

  ngOnInit() {
  }

  changeTab(which) {
    this.whichTab = which;
  }

  login() {
    this.router.navigate(['/home'])
  }

}
