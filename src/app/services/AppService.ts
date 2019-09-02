import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {}

  authn(credentials, callback) {
    const form = 'username=' + credentials.userName + '&' + 'password=' + credentials.password;
    this.http.post('/login', form, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded'),
      responseType: 'json'
    }).subscribe(res => {
      // console.log(res);
      if (!!callback) {
        callback(res);
      }
    }, err => {
      console.log(err);
    });
  }

  logout(callback) {
    this.http.get('/logout', {
      responseType: 'json'
    }).subscribe(res => {
      if (!!callback) {
        callback(res);
      }
    });
  }

  users(callback) {
    this.http.get('/api/users').subscribe(res => {
      if (!!callback) {
        callback(res);
      }
    });
  }

}
