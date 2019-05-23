import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, DummyComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
