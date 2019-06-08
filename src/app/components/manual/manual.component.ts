import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuxService } from 'src/app/auxilaries/aux.service';
import { MatDialog } from '@angular/material';
import { ThemesComponent } from '../modals/themes/themes.component';
import { Router } from '@angular/router';
import { CredentialService } from '../../services/credentials/credential.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManualComponent implements OnInit {
  public stepOne = {
    practice_info: {
      phone: '',
      email: '',
      address: '',
      practice_name: '',
      zipcode: '',
      city: '',
      state: '',
      suite: ''
    },
    docNames: [
      {
        id: Math.random(),
        fname: '',
        lname: ''
      }
    ]
  };
  public stepTwo = {
    officeHours: [
      {
        day: 'Monday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Tuesday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Wednesday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Thursday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Friday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Saturday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
      {
        day: 'Sunday',
        openTime: '',
        lunchStart: '',
        lunchEnd: '',
        closeTime: '',
        off: false
      },
    ],
  }
  public stepThree = {
    emrInfo: {
      software: '',
      npi: '',
      auth: '',
      token: ''
    }
  };
  public user: User;
  selectedTab = 0;
  selectedTabD = 0;
  @Output('switch') proceed = new EventEmitter<any>();

  constructor(public loc: Location,
    public aux: AuxService,
    public dialog: MatDialog,
    public auth: AuthService,
    public router: Router,
    public credentials: CredentialService) {
    this.user = credentials.user;
    this.stepThree.emrInfo.software = this.user.software;
  }

  public states = [
    {
      name: "Alabama",
      abbreviation: "AL"
    },
    {
      name: "Alaska",
      abbreviation: "AK"
    },
    {
      name: "American Samoa",
      abbreviation: "AS"
    },
    {
      name: "Arizona",
      abbreviation: "AZ"
    },
    {
      name: "Arkansas",
      abbreviation: "AR"
    },
    {
      name: "California",
      abbreviation: "CA"
    },
    {
      name: "Colorado",
      abbreviation: "CO"
    },
    {
      name: "Connecticut",
      abbreviation: "CT"
    },
    {
      name: "Delaware",
      abbreviation: "DE"
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC"
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM"
    },
    {
      name: "Florida",
      abbreviation: "FL"
    },
    {
      name: "Georgia",
      abbreviation: "GA"
    },
    {
      name: "Guam",
      abbreviation: "GU"
    },
    {
      name: "Hawaii",
      abbreviation: "HI"
    },
    {
      name: "Idaho",
      abbreviation: "ID"
    },
    {
      name: "Illinois",
      abbreviation: "IL"
    },
    {
      name: "Indiana",
      abbreviation: "IN"
    },
    {
      name: "Iowa",
      abbreviation: "IA"
    },
    {
      name: "Kansas",
      abbreviation: "KS"
    },
    {
      name: "Kentucky",
      abbreviation: "KY"
    },
    {
      name: "Louisiana",
      abbreviation: "LA"
    },
    {
      name: "Maine",
      abbreviation: "ME"
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH"
    },
    {
      name: "Maryland",
      abbreviation: "MD"
    },
    {
      name: "Massachusetts",
      abbreviation: "MA"
    },
    {
      name: "Michigan",
      abbreviation: "MI"
    },
    {
      name: "Minnesota",
      abbreviation: "MN"
    },
    {
      name: "Mississippi",
      abbreviation: "MS"
    },
    {
      name: "Missouri",
      abbreviation: "MO"
    },
    {
      name: "Montana",
      abbreviation: "MT"
    },
    {
      name: "Nebraska",
      abbreviation: "NE"
    },
    {
      name: "Nevada",
      abbreviation: "NV"
    },
    {
      name: "New Hampshire",
      abbreviation: "NH"
    },
    {
      name: "New Jersey",
      abbreviation: "NJ"
    },
    {
      name: "New Mexico",
      abbreviation: "NM"
    },
    {
      name: "New York",
      abbreviation: "NY"
    },
    {
      name: "North Carolina",
      abbreviation: "NC"
    },
    {
      name: "North Dakota",
      abbreviation: "ND"
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP"
    },
    {
      name: "Ohio",
      abbreviation: "OH"
    },
    {
      name: "Oklahoma",
      abbreviation: "OK"
    },
    {
      name: "Oregon",
      abbreviation: "OR"
    },
    {
      name: "Palau",
      abbreviation: "PW"
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA"
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR"
    },
    {
      name: "Rhode Island",
      abbreviation: "RI"
    },
    {
      name: "South Carolina",
      abbreviation: "SC"
    },
    {
      name: "South Dakota",
      abbreviation: "SD"
    },
    {
      name: "Tennessee",
      abbreviation: "TN"
    },
    {
      name: "Texas",
      abbreviation: "TX"
    },
    {
      name: "Utah",
      abbreviation: "UT"
    },
    {
      name: "Vermont",
      abbreviation: "VT"
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI"
    },
    {
      name: "Virginia",
      abbreviation: "VA"
    },
    {
      name: "Washington",
      abbreviation: "WA"
    },
    {
      name: "West Virginia",
      abbreviation: "WV"
    },
    {
      name: "Wisconsin",
      abbreviation: "WI"
    },
    {
      name: "Wyoming",
      abbreviation: "WY"
    }
  ]

  ngOnInit() {
    this.stepOne.practice_info.state = this.states[0].name;
    if (this.user.first_setup) {
      this.router.navigate(['theme/appSelect']);
    }
    if (this.user.practice_info != null && this.user.practice_info != '') {
      this.selectedTab = 1;
      this.selectedTabD = 1;
    }
    if (this.user.office_hours != null && this.user.office_hours != '') {
      this.selectedTab = 2
      if (this.user.package == 'PRO')
        this.selectedTabD = 2
      else
        this.selectedTabD = 3

    }
    if (this.user.package == "PRO" && this.user.emr_info != null && this.user.emr_info != '') {
      this.selectedTab = 3
      this.selectedTabD = 3
    }
    if (this.user.social_info != null && this.user.social_info != '') {
      this.selectedTab = 4
      if (this.user.package == 'PRO')
        this.selectedTabD = 4
      else
        this.selectedTabD = 4
    }
    if (this.user.forms != null && this.user.forms != '') {
      this.selectedTab = 5
      this.selectedTabD = 5
    }
    if (this.user.scheduling_info != null && this.user.scheduling_info != '') {
      this.selectedTab = 6
      this.selectedTabD = 6
    }

  }

  markAsOff(day) {
    day.off = !day.off;
  }

  updateStepOne(which) {
    var docs = [];
    console.log(this.stepOne.practice_info)
    for (let i = 0; i < Object.keys(this.stepOne.practice_info).length; i++) {
      if (this.stepOne.practice_info[Object.keys(this.stepOne.practice_info)[i]] == '' || this.stepOne.practice_info[Object.keys(this.stepOne.practice_info)[i]] == null) {
        this.aux.showAlert('Please don\'t leave any field blank', 'ERROR!');
        return;
      }
    }
    for (let i = 0; i < Object.keys(this.stepOne.docNames).length; i++) {
      if (this.stepOne.docNames[Object.keys(this.stepOne.docNames)[i]].fname != '' || this.stepOne.docNames[Object.keys(this.stepOne.docNames)[i]].fname != null) {
        docs.push(this.stepOne.docNames[i].fname);
      }
    }

    const params = {
      'updates': ["practice_info", "doctor_names"],
      'practice_info': this.stepOne.practice_info,
      'doctor_names': this.stepOne.docNames
    }

    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTabD = 1;
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });

  }
  updateStepTwo(which) {
    var docs = [];
    const params = {
      'updates': ["office_hours"],
      'office_hours': this.stepTwo.officeHours
    }

    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTab = 2;
        if (this.user.package == 'PRO')
          this.selectedTabD = 2
        else
          this.selectedTabD = 3
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });

  }
  updateStepThree(which) {
    var docs = [];

    for (let i = 0; i < Object.keys(this.stepThree.emrInfo).length; i++) {
      if (this.stepThree.emrInfo[Object.keys(this.stepThree.emrInfo)[i]] == '' || this.stepThree.emrInfo[Object.keys(this.stepThree.emrInfo)[i]] == null) {
        this.aux.showAlert('Please don\'t leave any field blank', 'ERROR!');
        return;
      }
    }
    const params = {
      'updates': ["emr_info"],
      'emr_info': this.stepThree.emrInfo
    }

    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTab = 3;
        this.selectedTabD = 3;
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });

  }
  updateStepFour(which) {

    const params = {
      'updates': ['social_info'],
      'social_info': 'CHECKED'
    }
    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTab = 4;
        this.selectedTabD = 4;
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });


  }
  updateStepFive(which) {
    const params = {
      'updates': ['forms'],
      'forms': 'CHECKED'
    }
    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTab = 5;
        this.selectedTabD = 5;
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });
  }
  updateStepSix(which) {
    const params = {
      'updates': ['scheduling_info'],
      'scheduling_info': 'CHECKED'
    }
    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.selectedTab = 6;
        this.selectedTabD = 6;
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });
  }
  updateStepSeven(which) {
    const params = {
      'updates': ['users'],
      'users': 'CHECKED'
    }
    this.auth.setupDentist(params).subscribe((result) => {
      if (result.status) {
        this.credentials.updateUser(result.data);
        this.user = result.data;
        this.proceed.emit('themeSetup')
      }
    }, (error) => {
      this.aux.errorResponse(error);
    });
  }

  selectTheme() {
    const dialogRef = this.dialog.open(ThemesComponent, {});
  }

  previous() {
    this.proceed.emit('auto');
  }

  changeInFields(which) {
  }

  addDoc() {
    this.stepOne.docNames.push({
      id: Math.random(),
      fname: '',
      lname: ''
    });
  }

  //   update() {
  //     if (this.stepOne.practice_info.email != '' && this.stepOne.practice_info.phone != '' && this.stepOne.practice_info.address != '' && this.stepOne.practice_info.practice_name != '') {
  //       if (this.user.package != 'LITE' && (this.stepThree.software == '' || this.stepThree.auth == '' || this.stepThree.token == '' || this.stepThree.npi == '')) {
  //         this.aux.showAlert('Please don\'t leave any field blank', 'ERROR!');
  //         return;
  //       }
  //     }
  //   //   const params = {
  //   //     theme_id: '5c9e753da7953e3028adc5d3',
  //   //     phone: this.stepOne.phone,
  //   //     practice_name: this.stepOne.practice_name,
  //   //     email: this.stepOne.email,
  //   //     address: this.stepOne.address,
  //   //     office_hours: this.stepOne.officeHours,
  //   //     doctor_names: this.stepOne.docNames,
  //   //     npi: this.stepTwo.npi,
  //   //     software: this.stepTwo.software,
  //   //     auth: this.stepTwo.auth,
  //   //     token: this.stepTwo.token,
  //   //     url: 'harry'
  //   //   };
  //   //   this.auth.setupDentist(params).subscribe((success) => {
  //   //     this.credentials.setUser(success.data);
  //   //     this.router.navigate(['appSetup']);
  //   //     // this.proceed.emit('auto');
  //   //   }, (error) => {
  //   //     this.aux.errorResponse(error);
  //   //   });
  //   // }

  // }
}
