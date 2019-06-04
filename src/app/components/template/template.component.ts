import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { CredentialService } from '../../services/credentials/credential.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input('primary') primary: string;
  @Input('secondary') secondary: string;
  @Input('logo') image: string;
  @Input('logoType') logo: string = 'nhorizontal';
  @Output('chosenTemplate') proceed = new EventEmitter<any>();
  public templates = [
    {
      name: 'OMNI',
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
  public user: User;
  public current = 0;
  public total_screens = 4;
  constructor(
    public credentials: CredentialService
  ) {
    this.user = credentials.user;
  }

  ngOnInit() {
    if (this.logo == '') {
      this.logo = 'nhorizontal';
    }
    console.log(this.image)
    console.log(this.logo)
    this.user.practice_info = JSON.parse(this.user.practice_info)
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
