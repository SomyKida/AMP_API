import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  public showDialog: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    this.showDialog = !this.showDialog;
  }

}
