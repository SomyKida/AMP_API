import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  category(abc) {
    this.router.navigate(["home/development"]);
  }

}
