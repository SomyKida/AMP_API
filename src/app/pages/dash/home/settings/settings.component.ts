import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public menuForMobs: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  openMenuForMobile() {
    this.menuForMobs = !this.menuForMobs;
  }
  category(abc) {
    this.router.navigate(["home/development"]);
  }

}
