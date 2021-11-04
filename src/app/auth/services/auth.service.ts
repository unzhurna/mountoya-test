import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

const baseURL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public reloader$: BehaviorSubject<any>;
 public user: Observable<any>;
 
 constructor(private httpClient: HttpClient, private storage: Storage) {
		this.reloader$ = new BehaviorSubject(null);
		this.user = this.reloader$.asObservable();
	}

  login(data: any): Observable<any> {
    return this.httpClient.post(baseURL+'/public/auth', data);
  }
  
  setUser(data: any) {
    this.storage.set("user", data).then((a:any) => {
      this.reloader$.next(a);
    });
  }

  setToken(value: any) {
    localStorage.setItem('token', value);
  }
    
  getToken(){ 
    return localStorage.getItem('token');
  }
  
  removeToken() {
    localStorage.removeItem('token');
  }

  clear() {
    localStorage.clear(); 
  }
}
