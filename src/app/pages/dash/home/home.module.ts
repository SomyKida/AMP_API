import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { SettingsComponent } from './settings/settings.component';
import { DevelopmentComponent } from './development/development.component';
import { SuportComponent } from './suport/suport.component';

@NgModule({
  declarations: [HomeComponent, SettingsComponent, DevelopmentComponent, SuportComponent],
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'support',
        component: SuportComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      }
    ]),
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
