import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { MatDialog, MatDatepicker } from '@angular/material';
import { ProDetailsComponent } from 'src/app/components/modals/pro-details/pro-details.component';
import { CredentialService } from '../../../services/credentials/credential.service'
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanComponent implements OnInit {
  selectedPlan: any = null;
  selectedTab: number = 0;
  public steps = {
    loginInfo: false,
    billingInfo: false,

  }
  public userFromUrl = null;
  public user:
    {
      fname: string, lname: string, address: string, zipcode: string,
      email: string, phoneNo: string, pass: string, conPass: string,
      city: string, state: string, authType: string, fb_id: string, g_id: string
    } = {
      fname: '',
      lname: '',
      address: '',
      zipcode: '',
      email: '',
      phoneNo: '',
      pass: '',
      conPass: '',
      city: '',
      state: '',
      authType: 'DESKTOP',
      fb_id: '',
      g_id: ''
    }
  public userFldsVlds = {
    fname: false,
    lname: false,
    address: false,
    zipcode: false,
    email: false,
    phoneNo: false,
    pass: false,
    conPass: false,
    city: false,
    state: false
  }
  public wait: boolean = false;
  public billing: {
    name: string, number: string, cvc: string, expiry: any,
    monthly: boolean, todays: boolean
  } = {
      name: '',
      number: '',
      cvc: '',
      expiry: '',
      monthly: false,
      todays: false
    }
  public billfldsVld: { name: boolean, number: boolean, cvc: boolean, expiry: boolean } = {
    name: false,
    number: false,
    cvc: false,
    expiry: false,
  }
  public menuForMobs: boolean = false;
  constructor(public auth: AuthService,
    public aux: AuxService,
    public extractor: ActivatedRoute,
    public router: Router,
    public credentials: CredentialService) { }

  ngOnInit() {
    if (this.credentials.user != null) {
      this.user.email = this.credentials.user.email;
      this.selectedPlan = {
        plan: {
          name: this.credentials.user.package
        }
      }
      this.steps.loginInfo = true;
      this.steps.billingInfo = true;
      this.selectedTab = 1;
      this.credentials.sessionStatus.subscribe(value => {
        this.user = value
        location.reload();
      })
    }
  }

  openMenuForMobile() {
    this.menuForMobs = !this.menuForMobs;
  }

  register(plan) {
    this.selectedPlan = plan;
  }

  loginCreated(output) {
    if (output.authType == 'DESKTOP') {
      this.user.email = output.user.email;
      this.user.pass = output.user.password;
      this.user.conPass = output.user.conPass;
      this.user.authType = output.authType;
    } else if (output.authType == 'FB') {
      this.user.email = output.user.email;
      this.user.fname = output.user.firstName;
      this.user.lname = output.user.lastName;
      this.user.authType = output.authType;
      this.user.fb_id = output.user.id;
    } else if (output.authType == 'GOOGLE') {
      this.user.email = output.user.email;
      this.user.fname = output.user.firstName;
      this.user.lname = output.user.lastName;
      this.user.authType = output.authType;
      this.user.g_id = output.user.id;
    }
    this.steps.loginInfo = true;
  }

  agree(whom) {
    if (whom == 'today')
      this.billing.todays = !this.billing.todays;
    else if (whom == 'monthly')
      this.billing.monthly = !this.billing.monthly;
  }

  changeInFields(field) {
    if (field == 'fname')
      this.userFldsVlds.fname = false;
    else if (field == 'lname')
      this.userFldsVlds.lname = false;
    else if (field == 'address')
      this.userFldsVlds.address = false;
    else if (field == 'email')
      this.userFldsVlds.email = false;
    else if (field == 'phoneNo')
      this.userFldsVlds.phoneNo = false;
    else if (field == 'zipcode')
      this.userFldsVlds.zipcode = false;
    else if (field == 'pass')
      this.userFldsVlds.pass = false;
    else if (field == 'conPass')
      this.userFldsVlds.conPass = false;
    else if (field == 'city')
      this.userFldsVlds.city = false;
    else if (field == 'state')
      this.userFldsVlds.state = false;
    else if (field == 'cardname')
      this.billfldsVld.name = false;
    else if (field == 'cardnumber')
      this.billfldsVld.number = false;
    else if (field == 'cardexpiry')
      this.billfldsVld.expiry = false;
    else if (field == 'cardcvc')
      this.billfldsVld.cvc = false;
  }

  previous() {
    if (this.selectedPlan != null)
      if (this.steps.loginInfo == false) {
        this.selectedPlan = null;
      } else if (this.steps.loginInfo == true && this.steps.billingInfo == false) {
        this.steps.loginInfo = false;
      } else if (this.steps.billingInfo == true) {
        this.selectedTab = 0;
        this.steps.billingInfo = false;
      }

    // if (this.hasSignedUp == true) {
    //   this.selectedTab = 0;
    //   this.hasSignedUp = false;
    // } else if (this.selectedPlan != null) {
    //   this.selectedTab = 0;
    //   this.selectedPlan = null;
    // }
  }

  signUp() {
    var check = false;
    if (this.user.fname == '') {
      this.userFldsVlds.fname = true;
      check = true;
    }
    if (this.user.lname == '') {
      this.userFldsVlds.lname = true;
      check = true;
    }
    if (this.user.address == '') {
      this.userFldsVlds.address = true;
      if (!check)
        check = true;
    }
    if (this.user.email == '') {
      this.userFldsVlds.email = true;
      if (!check)
        check = true;
    }
    if (this.user.phoneNo == '' || this.user.phoneNo == null) {
      this.userFldsVlds.phoneNo = true;
      if (!check)
        check = true;
    }
    if (this.user.zipcode == '' || this.user.zipcode == null) {
      this.userFldsVlds.zipcode = true;
      if (!check)
        check = true;
    }
    if (this.user.city == '') {
      this.userFldsVlds.city = true;
      if (!check)
        check = true;
    }
    if (this.user.state == '') {
      this.userFldsVlds.state = true;
      if (!check)
        check = true;
    }
    // if (this.user.pass == '' && this.user.authType == 'DESKTOP') {
    //   this.userFldsVlds.pass = true;
    //   if (!check)
    //     check = true;
    // }
    // if (this.user.conPass == '' && this.user.authType == 'DESKTOP') {
    //   this.userFldsVlds.conPass = true;
    //   if (!check)
    //     check = true;
    // }
    // if (this.user.pass != this.user.conPass && this.user.authType == 'DESKTOP') {
    //   this.userFldsVlds.pass = true;
    //   this.userFldsVlds.conPass = true;
    //   this.aux.showAlert("Passwords don't match.", "ERROR");
    //   return;
    // }
    // if ((this.user.pass.length < 8 || this.user.conPass.length < 8) && this.user.authType == 'DESKTOP') {
    //   this.userFldsVlds.pass = true;
    //   this.userFldsVlds.conPass = true;
    //   this.aux.showAlert("Password must be atleast 8 characters long.", "ERROR");
    //   return;
    // }
    if (!this.aux.validate_email(this.user.email)) {
      this.userFldsVlds.email = true;
      this.aux.showAlert("Please enter a valid email address.", "ERROR");
      return;
    }
    if (check) {
      this.aux.showAlert("Please don't leave any field blank.", "ERROR");
      return;
    }
    var params = {
      first_name: this.user.fname,
      last_name: this.user.lname,
      address: this.user.address,
      zip: this.user.zipcode,
      city: this.user.city,
      state: this.user.state,
      email: this.user.email,
      phone: this.user.phoneNo,
      package: this.selectedPlan.plan.name,
      pwd: this.user.pass,
      conf_pwd: this.user.conPass,
      is_discount: this.selectedPlan.discount == true ? true : false,
      auth_type: this.user.authType,
      g_id: this.user.g_id,
      fb_id: this.user.fb_id,
      software: this.selectedPlan.provider != null ? this.selectedPlan.provider.name : ''
    }
    if (this.selectedPlan.provider)
      params['service_provider'] = this.selectedPlan.provider._id;
    this.auth.signUp(params).subscribe((success) => {
      this.credentials.setUser(success.data)
      this.user = success.data;
      this.steps.billingInfo = true;
      this.selectedTab = 1;
    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

  monthSelection(month: Date, datepicker) {
    this.billing.expiry = month;
    datepicker.close();
  }

  billMe() {
    var check: boolean = false;
    if (this.billing.name == '') {
      check = true;
      this.billfldsVld.name = true;
    }
    if (this.billing.number == '' || this.billing.number == null) {
      this.billfldsVld.number = true;
      if (!check)
        check = true;
    }
    if (this.billing.expiry == '' || this.billing.expiry == null) {
      this.billfldsVld.expiry = true;
      if (!check)
        check = true;
    }
    if (this.billing.cvc == '' || this.billing.cvc == null) {
      this.billfldsVld.cvc = true;
      if (!check)
        check = true;
    }
    if (this.billing.number.toString().length < 16) {
      this.billfldsVld.number = true;
      this.aux.showAlert("Incorrect card number", "ERROR");
      return;
    }
    if (this.billing.cvc.toString().length < 3 || this.billing.cvc.toString().length > 4) {
      this.billfldsVld.cvc = true;
      this.aux.showAlert("Incorrect CVC", "ERROR");
      return;
    }
    if (this.billing.todays == false || this.billing.monthly == false) {
      this.aux.showAlert("Please accept both terms in order to submit.", "ERROR");
      return;
    }
    if (check) {
      this.aux.showAlert("Please don't leave any field blank.", "ERROR");
      return;
    }
    var params = {
      email: this.user.email,
      card_number: this.billing.number,
      card_expiry_year: this.billing.expiry.year(),
      card_expiry_month: this.aux.getMonth(this.billing.expiry.month()),
      card_cvc: this.billing.cvc
    }
    this.auth.pay(params).subscribe((success) => {
      this.router.navigate(['/setup'])
      var user = this.credentials.user;
      user.init_payment = true;
      this.credentials.setUser(user);
      this.aux.showAlert('Payment recieved, Please check your email.', "Successful Transaction!");

    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

}
