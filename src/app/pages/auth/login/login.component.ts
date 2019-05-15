import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { AuthService as SocialAuth } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: ''
  }
  public usrVld: { 
    usr: boolean,
     pass: boolean 
  } = {
    usr: false,
    pass: false
  }
  constructor(public auth: AuthService,
    public router: Router,
    public credential: CredentialService,
    public location: Location,
    public socialService: SocialAuth,
    public aux: AuxService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  changeInFields(field) {
    if (field == 'email')
      this.usrVld.usr = false;
    else if (field == 'pass')
      this.usrVld.pass = false;
  }

  login() {
    var check = false;
    if (this.user.email == '') {
      this.usrVld.usr = true;
      check = true;
    }
    if (this.user.password == '') {
      this.usrVld.pass = true;
      if (!check)
        check = true;
    }
    if (check) {
      this.aux.showAlert("Please don't leave any field blank", "ERROR!");
      return;
    }
    var params = {
      email: this.user.email,
      pwd: this.user.password
    }
    this.auth.login(params).subscribe((success) => {
      this.credential.setUser(success.data);
      this.router.navigate(['/setup'])
    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

  fbLogin() {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then((result) => {
      var params = {
        email: result.email,
        fb_id: result.id
      }
      this.auth.fbLogin(params).subscribe((success) => {
        this.credential.setUser(success.data);
        this.router.navigate(['/home'])
      }, (error) => {
        this.aux.errorResponse(error);
      })
    });
  }

  gpLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then((result) => {
      var params = {
        email: result.email,
        g_id: result.id
      }
      this.auth.gpLogin(params).subscribe((success) => {
        this.credential.setUser(success.data);
        this.router.navigate(['/home'])
      }, (error) => {
        this.aux.errorResponse(error);
      })
    }).catch((error) => {
      console.log(error);
    })
  }

}
