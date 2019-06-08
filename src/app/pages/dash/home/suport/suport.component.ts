import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrls: ['./suport.component.scss']
})
export class SuportComponent implements OnInit {
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
