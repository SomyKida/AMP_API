import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatTabsModule, MatDialogModule,
  MatRippleModule, MatListModule, MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
