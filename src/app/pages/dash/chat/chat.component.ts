import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public menuForMobs: boolean = false;

  public categories = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  }

  constructor() { }

  ngOnInit() {
  }

  openMenuForMobile() {
    this.menuForMobs = !this.menuForMobs;
  }

  category(which) {
    if (which == 'first')
      this.categories.first = !this.categories.first;
    else if (which == 'second')
      this.categories.second = !this.categories.second;
    else if (which == 'thrid')
      this.categories.third = !this.categories.third;
    else if (which == 'fourth')
      this.categories.fourth = !this.categories.fourth;
    else if (which == 'fifth')
      this.categories.fifth = !this.categories.fifth;
    else if (which == 'sixth')
      this.categories.sixth = !this.categories.sixth;


  }

}
