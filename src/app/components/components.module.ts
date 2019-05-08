import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OffersComponent } from './offers/offers.component';
import { MaterialModule } from './material/material.module';
import { AlertComponent } from './modals/alert/alert.component';
import { FabComponent } from './fab/fab.component';
import { AlitaComponent } from './alita/alita.component';
import { ManualComponent } from './manual/manual.component';
import { FormsModule } from '@angular/forms';
import { ProDetailsComponent } from './modals/pro-details/pro-details.component';
import { ThemesComponent } from './modals/themes/themes.component';
import { LoggedComponent } from './logged/logged.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { Picker } from './pipes/pipes.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { TemplateComponent } from './template/template.component';
// import { ColorPickerModule } from 'ngx-color-picker';
import { ColorHueModule } from 'ngx-color/hue';
import { ColorAlphaModule } from 'ngx-color/alpha';

@NgModule({
  declarations: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent,
    AlitaComponent,
    ManualComponent,
    ProDetailsComponent,
    ThemesComponent,
    LoggedComponent,
    Picker,
    TemplateComponent,
  ],
  imports: [
    NgxMaterialTimepickerModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ColorHueModule,
    ColorAlphaModule,
    // ColorPickerModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent,
    AlitaComponent,
    ManualComponent,
    ProDetailsComponent,
    LoggedComponent,
    Picker,
    TemplateComponent,
  ],
  entryComponents: [
    AlertComponent,
    ProDetailsComponent,
    ThemesComponent
  ]
})
export class ComponentsModule { }
