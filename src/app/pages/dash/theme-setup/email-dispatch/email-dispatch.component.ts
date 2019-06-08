import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-dispatch',
  templateUrl: './email-dispatch.component.html',
  styleUrls: ['./email-dispatch.component.scss']
})
export class EmailDispatchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/home']);
  }

}
