import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { AuthService } from "angularx-social-login";
import { AuthService as Logged } from '../../services/auth/auth.service';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  @Input() which: string;
  @Output('created') out: EventEmitter<any> = new EventEmitter<any>();
  @Output('backPlan') back: EventEmitter<any> = new EventEmitter<any>();
  public user: { email: string, password: string, conPass: string } = {
    email: "",
    password: '',
    conPass: ''
  }
  public usrVld: { usr: boolean, pass: boolean, conPass: boolean } = {
    usr: false,
    pass: false,
    conPass: false,
  }

  constructor(public aux: AuxService,
    public auth: Logged,
    public socialService: AuthService) { }

  changeInFields(field) {
    if (field == 'email')
      this.usrVld.usr = false;
    else if (field == 'pass')
      this.usrVld.pass = false;
    else if (field == 'con')
      this.usrVld.conPass = false;
  }

  ngOnInit() {
  }

  createUser() {
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
    if (this.user.conPass == '') {
      this.usrVld.conPass = true;
      if (!check)
        check = true;
    }
    if (this.user.password != this.user.conPass) {
      this.usrVld.pass = true;
      this.usrVld.conPass = true;
      this.aux.showAlert("Passwords don't match.", "ERROR");
      return;
    }
    if (this.user.password.length < 8 || this.user.conPass.length < 8) {
      this.usrVld.pass = true;
      this.usrVld.conPass = true;
      this.aux.showAlert("Password must be atleast 8 characters long.", "ERROR");
      return;
    }
    if (!this.aux.validate_email(this.user.email)) {
      this.usrVld.usr = true;
      this.aux.showAlert("Please enter a valid email address.", "ERROR");
      return;
    }
    if (check) {
      this.aux.showAlert("Please don't leave any field blank", "ERROR!");
      return;
    }
    this.moveToNextStep({ user: this.user, authType: 'DESKTOP' })

  }

  fbLogin() {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then((result) => {
      this.moveToNextStep({ user: result, authType: 'FB' })
    });
  }

  gpLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then((result) => {
      this.moveToNextStep({ user: result, authType: 'GOOGLE' })
    })
  }

  moveToNextStep(response) {
    var params = {
      email: response.user.email
    }
    this.auth.emailValidity(params).subscribe((success) => {
      if (success.data.found == true) {
        this.aux.showAlert("An account with same email already exists!", "ERROR!");
      } else
        this.out.emit(response);
    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

  goBack() {
    if (this.which == 'create') {
      this.back.emit('back');
    }
  }

}
