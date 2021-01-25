import { VinculaArquiteto } from './vincula-arquiteto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinculaArquitetoService {

  baseUrl = 'http://localhost:3001/vincula-arquiteto'

  constructor(private http: HttpClient) { }

  read(): Observable<VinculaArquiteto[]> {
    return this.http.get<VinculaArquiteto[]>(this.baseUrl).pipe(
      map((obj) => obj)
    )
  }

  readById(id: number): Observable<VinculaArquiteto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<VinculaArquiteto>(url).pipe(
      map((obj) => obj)
    )
  }

  create(vinculaArquiteto: VinculaArquiteto):Observable<VinculaArquiteto> {
    return this.http.post<VinculaArquiteto>(this.baseUrl, vinculaArquiteto).pipe(
      map((obj) => obj)
    )
  }

  update(vinculaArquiteto: VinculaArquiteto):Observable<VinculaArquiteto> {
    const url = `${this.baseUrl}/${vinculaArquiteto.id}`
    return this.http.put<VinculaArquiteto>(url, vinculaArquiteto).pipe(
      map((obj) => obj)
    )

  }

  delete(id: number):Observable<VinculaArquiteto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<VinculaArquiteto>(url).pipe(
      map((obj) => obj)
    )
  }
}
