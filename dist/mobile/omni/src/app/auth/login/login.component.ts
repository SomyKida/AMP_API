import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CredentialService } from '../../services/credentials/credential.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public whichTab: string = 'login';
  public authData = {
    email: '',
    password: ''
  }
  public newUser = {
    email: '',
    password: '',
    conf_password: '',
    month: '',
    day: '',
    year: ''
  }
  public authLoader: Boolean = false;
  public saveSession: Boolean = false;
  public touchId: Boolean = false;
  constructor(
    public auth: AuthService,
    public router: Router,
    public credential: CredentialService) { }

  ngOnInit() {
  }

  changeTab(which) {
    this.whichTab = which;
  }

  toggle(type) {
    switch (type) {
      case 'session':
        this.saveSession = !this.saveSession;
        break;
      case 'touch':
        this.touchId = !this.touchId;
        break;
      default:
        return;
    }

  }
  login() {

    if (this.authData.email == '' || this.authData.password == '') {
      alert("Please don't leave any field blank.");
      return;
    }
    var params = {
      email: this.authData.email,
      pwd: this.authData.password

    }
    this.authLoader = true;
    this.auth.login(params).subscribe((success) => {
      this.credential.setUser(success.data);
      this.authLoader = false;
      this.router.navigate(['/home'])
    }, (error) => {
      var message = JSON.parse(error._body);
      alert(message.errorMessage)
      this.authLoader = false;
    })



  }

  signup() {

    if (this.newUser.email == '' || this.newUser.day == '' || this.newUser.password == '' || this.newUser.conf_password == '' || this.newUser.month == '' || this.newUser.year == '') {
      alert("Please don't leave any field blank.");
      return;
    }
    var params = {
      email: this.newUser.email,
      pwd: this.newUser.password,
      conf_pwd: this.newUser.conf_password,
      dob: this.newUser.day + '/' + this.newUser.month + '/' + this.newUser.year
    }
    this.authLoader = true;
    this.auth.signUp(params).subscribe((success) => {
      this.credential.setUser(success.data);
      this.authLoader = false;
      this.router.navigate(['/home'])
    }, (error) => {
      var message = JSON.parse(error._body);
      alert(message.errorMessage)
      this.authLoader = false;
    })



  }
}
