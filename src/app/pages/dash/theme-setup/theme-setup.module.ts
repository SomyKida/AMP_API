import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSetupRoutingModule } from './theme-setup-routing.module';
import { AppSelectComponent } from './app-select/app-select.component';
import { ThemeSetupComponent } from './theme-setup.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from '../../../components/material/material.module';
import { AppCustomizationComponent } from './app-customization/app-customization.component';
@NgModule({
  declarations: [AppSelectComponent, ThemeSetupComponent, AppCustomizationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ThemeSetupRoutingModule,
    MaterialModule
  ]
})
export class ThemeSetupModule { }
