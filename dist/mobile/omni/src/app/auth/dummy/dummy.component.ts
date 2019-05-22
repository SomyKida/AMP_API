import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(which) {
    if (which == 'login')
      this.router.navigate(['/auth/login']);
  }

}
