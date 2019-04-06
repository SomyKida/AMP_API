import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ThemesComponent>) { }

  ngOnInit() {
  }
  thisIs(provider) {
    this.dialogRef.close();
  }
}
