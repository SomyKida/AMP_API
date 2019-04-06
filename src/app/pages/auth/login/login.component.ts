import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  public usrVld: { usr: boolean, pass: boolean } = {
    usr: false,
    pass: false
  }
  constructor(public auth: AuthService,
    public router: Router,
    public location: Location,
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
      this.router.navigate(['/home'])
    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

}
