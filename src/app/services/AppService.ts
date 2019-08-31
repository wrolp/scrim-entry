import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {}

  authn(credentials, callback) {
    const form = 'username=' + credentials.userName + '&' + 'password=' + credentials.password;
    this.http.post('/login', form, {
      headers: new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    }).subscribe(res => {
      // console.log(res);
      if (callback) {
        callback(res);
      }
    }, err => {
      console.log(err);
    });
  }

}
