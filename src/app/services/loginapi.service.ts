import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post(`https://6440b4a0fadc69b8e070cdb4.mockapi.io/login/login`, loginData);
  }
}
