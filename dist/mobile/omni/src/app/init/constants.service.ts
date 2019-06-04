import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  //public API_ENDPOINT = 'http://localhost:5000'
  public API_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com'
  public Image_base_path = '';
  public fbAppId = "668732456921248";
  public googleClientId = "287989781591-0l0m9f6dmgikf84c8223gbkfu8g27mus.apps.googleusercontent.com" //email used codingpixel.test6@gmail.com
  public googleClientSecret = "DDFBh7oI3NO6qaQsxpLdGNEN";
  constructor() { }
}
