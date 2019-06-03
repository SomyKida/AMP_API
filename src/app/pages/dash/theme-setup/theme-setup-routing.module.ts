import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSelectComponent } from './app-select/app-select.component';
import { ThemeSetupComponent } from './theme-setup.component';
import { AppCustomizationComponent } from './app-customization/app-customization.component';
const routes: Routes = [
  {
    path: '',
    component: ThemeSetupComponent,
    children: [
      {
        path: '',
        redirectTo: 'appSelect',
        pathMatch: 'full'
      },
      {
        path: 'appSelect',
        component: AppSelectComponent
      },
      {
        path: 'appCustomization',
        component: AppCustomizationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeSetupRoutingModule { }
