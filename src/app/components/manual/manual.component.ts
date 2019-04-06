import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuxService } from 'src/app/auxilaries/aux.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManualComponent implements OnInit {
  public stepOne = {
    phone: '',
    email: '',
    address: '',
    officeHours: [
      {
        day: 'Monday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Tuesday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Wednesday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Thursday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Firday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Saturday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
      {
        day: 'Sunday',
        openTime: '',
        lunchTime: '',
        closeTime: ''
      },
    ],
    docNames: [
      {
        id: Math.random(),
        name: ''
      }
    ]
  }
  public stepTwo = {
    software: '',
    npi: '',
    auth: '',
    token: ''
  }
  selectedTab: number = 0;

  constructor(public loc: Location,
    public aux: AuxService,
    public auth: AuthService) { }

  ngOnInit() {
  }

  toStep(which) {
    this.selectedTab = which;
  }

  previous() {
    if (this.selectedTab > 0) {
      this.selectedTab--;
    } else {
      this.loc.back()
    }
  }

  changeInFields(which) {

  }

  addDoc() {
    this.stepOne.docNames.push({
      id: Math.random(),
      name: ''
    })
  }

  update() {
    if (this.stepOne.email != '' && this.stepOne.phone != '' && this.stepOne.address != ''
      && this.stepTwo.software != '' && this.stepTwo)
      var params = {
        theme_id: '5c9e753da7953e3028adc5d3',
        phone: this.stepOne.phone,
        name: 'Harry - The Nutritionist',
        email: this.stepOne.email,
        address: this.stepOne.address,
        office_hours: this.stepOne.officeHours,
        doctor_names: this.stepOne.docNames,
        npi: this.stepTwo.npi,
        software: this.stepTwo.software,
        auth: this.stepTwo.auth,
        token: this.stepTwo.token,
        url: 'harry'
      }
    this.auth.setupDentist(params).subscribe(() => {

    }, (error) => {
      this.aux.errorResponse(error);
    })
  }

}
