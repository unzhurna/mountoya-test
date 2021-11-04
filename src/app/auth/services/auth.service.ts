import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { computeMsgId } from '@angular/compiler';

const baseURL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 constructor(private httpClient: HttpClient) {}

  accessToken(): Observable<any> {
    const auth = {
      grant_type: "password",
      username: "cms", 
      password: "8b0f19c0926861a3d75655a59efdc3b4"
    }
    return this.httpClient.post(baseURL+'oauth/token/', auth);
  }

  login(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:  'Bearer ' + this.getToken(),
      })
    };
    return this.httpClient.post(baseURL+'auth/user/login/', data, httpOptions);
  }

  setToken(value: any) {
    localStorage.setItem('token', value);
  }
    
  getToken() { 
    return localStorage.getItem('token');
  }
  
  removeToken() {
    localStorage.removeItem('token');
  }

  clear() {
    localStorage.clear(); 
  }
}
