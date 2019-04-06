import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alita',
  templateUrl: './alita.component.html',
  styleUrls: ['./alita.component.scss']
})
export class AlitaComponent implements OnInit {
  @Output('switch') proceed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  manual() {
    this.proceed.emit('manual');
  }

}
