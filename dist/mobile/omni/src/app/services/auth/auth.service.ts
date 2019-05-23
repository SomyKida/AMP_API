import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantsService } from '../../init/constants.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public providers = [];
  constructor(public http: Http, public constants: ConstantsService) { }

  signUp(params) {
    var url = this.constants.API_ENDPOINT + '/api/patient/auth/signup';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }
  login(params) {
    var url = this.constants.API_ENDPOINT + '/api/patient/auth/login';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

}
