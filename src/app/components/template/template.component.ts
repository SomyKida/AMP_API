import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input('primary') primary: string;
  @Input('secondary') secondary: string;
  @Input('logo') image: string;
  @Output('chosenTemplate') proceed = new EventEmitter<any>();
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
    // {
    //   name: 'Rouge',
    //   selected: false
    // },

  ]
  public current = 0;
  public total_screens = 3;
  constructor() { }

  ngOnInit() {
    this.proceed.emit(this.templates[this.current]);
  }

  forward() {
    if (this.current < (this.templates.length - 1)) {
      this.current++;
    } else {
      this.current = 0;
    }
    this.proceed.emit(this.templates[this.current]);
  }
  backward() {
    if (this.current == 0)
      this.current = (this.templates.length - 1);
    else
      this.current--;
    this.proceed.emit(this.templates[this.current]);
  }

}
