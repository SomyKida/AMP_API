import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/dash/home/home.component';

const routes: Routes = [
  {
    path: 'plan',
    loadChildren: './pages/auth/auth.module#AuthModule'
  },
  {
    path: 'chat',
    loadChildren: './pages/dash/chat/chat.module#ChatModule'
  },
  {
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './pages/dash/home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'plan'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
