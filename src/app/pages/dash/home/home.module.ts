import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    CommonModule
  ]
})
export class HomeModule { }
