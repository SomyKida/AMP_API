import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  //public API_ENDPOINT = 'http://localhost:5000'
  public API_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com'
  public Image_base_path = '';
  public fbAppId = "2376072312415673";
  public googleClientId = "4424176729254-plsvkdgog2am23ad95i5et4agtrhbbca.apps.googleusercontent.com" //email used codingpixel.test6@gmail.com
  public googleClientSecret = "k5Tv7r-mByf7cTMvmhXzlUYw";
  constructor() { }
}
