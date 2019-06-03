import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSetupService {

  selectedTheme: number = 1;
  constructor() { }

  getSelectedTheme() {
    return this.selectedTheme;
  }

  updateSelectedTheme(id) {
    if (id > 0 && id <= 5) {
      this.selectedTheme = id;
      return id;
    } else {
      return -1;
    }
  }
}
