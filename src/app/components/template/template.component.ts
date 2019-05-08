import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input('primary') primary: string;
  @Input('secondary') secondary: string;
  @Input('logo') image: string;
  public templates = [
    {
      name: 'Ashen',
      selected: false
    },
    {
      name: 'Omni',
      selected: false
    },
    {
      name: 'Eclectic',
      selected: false
    },
    {
      name: 'Eon',
      selected: false
    },
    {
      name: 'Rouge',
      selected: false
    },

  ]
  public current = 0;
  public total_screens = 3;
  constructor() { }

  ngOnInit() {
  }

  forward() {
    if (this.current < (this.templates.length - 1)) {
      this.current++;
    } else {
      this.current = 0;
    }
  }
  backward() {
    if (this.current == 0)
      this.current = (this.templates.length - 1);
    else
      this.current--;
  }
}
