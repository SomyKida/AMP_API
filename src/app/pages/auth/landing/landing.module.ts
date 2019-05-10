import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ]),
  ]
})
export class LandingModule { }
