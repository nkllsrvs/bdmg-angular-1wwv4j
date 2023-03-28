import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getAddres(cep: string): Observable<any> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<any>(url);
  }
}
