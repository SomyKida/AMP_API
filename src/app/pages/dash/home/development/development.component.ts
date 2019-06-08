import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  previous() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
