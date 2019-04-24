import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupComponent
      }
    ]),
    MaterialModule
  ]
})
export class SetupModule { }
