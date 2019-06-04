import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorChromeModule } from 'ngx-color/chrome';
import { ColorSliderModule } from 'ngx-color/slider';
import { ThemeSetupRoutingModule } from './theme-setup-routing.module';
import { AppSelectComponent } from './app-select/app-select.component';
import { ThemeSetupComponent } from './theme-setup.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from '../../../components/material/material.module';
import { AppCustomizationComponent } from './app-customization/app-customization.component';
import { EmailDispatchComponent } from './email-dispatch/email-dispatch.component';
@NgModule({
  declarations: [AppSelectComponent, ThemeSetupComponent, AppCustomizationComponent, EmailDispatchComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ThemeSetupRoutingModule,
    MaterialModule,
    ColorChromeModule,
    ColorSliderModule
  ]
})
export class ThemeSetupModule { }
