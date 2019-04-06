import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuxService } from 'src/app/auxilaries/aux.service';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProDetailsComponent implements OnInit {
  public wait: boolean = true;
  public listed: boolean = true;
  public provider = {
    newProvider: '',
    email: ''
  }
  public newProvider = '';
  public providers = [];
  constructor(@Inject(MAT_DIALOG_DATA) data,
    public auth: AuthService,
    public aux: AuxService,
    public dialogRef: MatDialogRef<ProDetailsComponent>) { }

  ngOnInit() {
    if (this.auth.providers.length == 0)
      this.auth.serviceProviders().subscribe((success) => {
        this.wait = false;
        this.auth.providers = success.data;
        this.providers = success.data;
      }, (error) => {
        this.wait = false;
        this.aux.errorResponse(error);
      })
    else {
      this.wait = false;
      this.providers = this.auth.providers;
    }
  }

  notListed() {
    this.listed = false;
  }

  add() {
    if (this.provider.newProvider != '' && this.provider.email != '') {
      var params = {
        name: this.provider.newProvider,
        email: this.provider.email
      }
      this.auth.requestProvider(params).subscribe(() => {
        this.dialogRef.close(null);
      }, (error) => {
        this.aux.errorResponse(error);
      })
    } else {
      this.aux.showAlert("Please, don't leave any field blank", 'ERROR');
    }
  }

  thisIs(provider) {
    this.dialogRef.close(provider);
  }

}
