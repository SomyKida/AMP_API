import { Component, OnInit } from '@angular/core';
import { ThemeSetupService } from 'src/app/services/theme-setup/theme-setup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss']
})
export class AppSelectComponent implements OnInit {

  constructor(
    private themeService: ThemeSetupService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selected(id) {
    this.themeService.updateSelectedTheme(id);
    this.router.navigate(['theme/appCustomization']);
  }
}
