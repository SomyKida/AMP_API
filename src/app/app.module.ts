import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { HttpFactory } from './services/httpInterceptor/httpFactory';
import { AuthService } from './services/auth/auth.service';
import { CredentialService } from './services/credentials/credential.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { AuxService } from './auxilaries/aux.service';
import { SessGuardService } from './services/guards/sess-guard.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { provideConfig } from './services/social/social';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CredentialService,
    AuthService,
    AuxService,
    SessGuardService,
    {
      provide: Http,
      useFactory: HttpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
