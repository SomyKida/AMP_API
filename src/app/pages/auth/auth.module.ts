import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/components/material/material.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    ComponentsModule,
    FormsModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: PlanComponent
      },
      {
        path: ':token',
        component: PlanComponent
      }
    ]),
    CommonModule,
    MaterialModule
  ]
})
export class AuthModule { }
