import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/guards/auth-guard.service';
import { SessGuardService } from './services/guards/sess-guard.service';

const routes: Routes = [
  {
    path: 'plan',
    loadChildren: './pages/auth/auth.module#AuthModule',
    canActivate: [SessGuardService]
  },
  {
    path: 'chat',
    loadChildren: './pages/dash/chat/chat.module#ChatModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginModule',
    canActivate: [SessGuardService]
  },
  {
    path: 'home',
    loadChildren: './pages/dash/home/home.module#HomeModule',
    canActivate: [AuthGuard]
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
