import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrls: ['./suport.component.scss']
})
export class SuportComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  category(abc) {
    this.router.navigate(["home/development"]);
  }
}
