import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input('primary') primary: string;
  @Input('secondary') secondary: string;
  public current = 0;
  public total_screens = 3;
  constructor() { }

  ngOnInit() {
  }

  forward() {
    if (this.current == this.total_screens)
      this.current = 0;
    else
      this.current++;
  }
  backward() {
    if (this.current == 0)
      this.current = this.total_screens;
    else
      this.current--;
  }
}
