import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public API_ENDPOINT = 'http://localhost:5000'
  // public API_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com'
  public Image_base_path = ''

  constructor() { }
}
