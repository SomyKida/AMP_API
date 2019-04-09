import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProDetailsComponent } from '../modals/pro-details/pro-details.component';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public packages = [
    {
      "_id": "5c9f1e3eaa6b2b80b3092919",
      "name": "LITE",
      "price": 199,
      "__v": 0
    },
    {
      "_id": "5c9f1e44aa6b2b80b309291a",
      "name": "PRO",
      "price": 399,
      "__v": 0
    }
  ]
  @Output('plan') selectedPlan: EventEmitter<any> = new EventEmitter<any>()
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectPlan(plan) {
    setTimeout(() => {
      this.selectedPlan.emit({ plan: plan, provider: null });
    }, 300);
  }

  proPackage() {
    const dialogRef = this.dialog.open(ProDetailsComponent, {});
    dialogRef.afterClosed().subscribe((provider) => {
      if (provider)
        this.selectedPlan.emit({ plan: this.packages[1], provider: provider });
      else if (provider != undefined)
        this.selectedPlan.emit({ plan: this.packages[0], provider: null });
    })
  }

}
