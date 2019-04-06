import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public botOrManual: boolean = true;
  public user;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  switchToManual(event) {
    this.botOrManual = false;
  }

}
