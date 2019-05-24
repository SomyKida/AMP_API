import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatTabsModule, MatDialogModule,
  MatRippleModule, MatListModule, MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const EXPIRY_FORMAT = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: EXPIRY_FORMAT },
  ]
})
export class MaterialModule { }
