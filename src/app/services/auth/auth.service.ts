import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantsService } from 'src/app/init/constants.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public providers = [];
  constructor(public http: Http, public constants: ConstantsService) { }

  signUp(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v3/register';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  pay(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v2/pay-init';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  login(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/login';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  forgot(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/login';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  setupDentist(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v2/setup';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  serviceProviders() {
    var url = this.constants.API_ENDPOINT + '/api/system/get-services';
    var response = this.http.get(url).pipe(map(res => res.json()));
    return response;
  }

  requestProvider(params) {
    var url = this.constants.API_ENDPOINT + '/api/system/add-service-request';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }

  authenticateToken(params) {
    var url = this.constants.API_ENDPOINT + '/api/dentist/auth/authenticate-token';
    var response = this.http.post(url, params, {}).pipe(map(res => res.json()));
    return response;
  }
}
