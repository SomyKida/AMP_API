import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
  public message: string;
  public title: string;
  constructor(@Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<AlertComponent>) {
    this.message = data.message;
    this.title = data.title;
  }

  ngOnInit() {
  }

  dismiss() {
    this.dialogRef.close();
  }

}
