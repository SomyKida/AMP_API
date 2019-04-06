import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../components/modals/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AuxService {

  constructor(public dialog: MatDialog) { }

  showAlert(message, title) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: { message: message, title: title }
    });
  }

  errorResponse(error) {
    var message = JSON.parse(error._body);
    this.showAlert(message.errorMessage, "ERROR");
  }

  validate_email(email) {
    var format = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    return (email.match(format));
  }
}
