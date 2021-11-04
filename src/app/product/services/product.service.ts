import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

const baseURL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL+'/public/product');
  }

  read(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL+'/public/product', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
}
