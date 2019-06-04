import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, CircleComponent]
})
export class HomeModule { }
