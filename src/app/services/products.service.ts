import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Figurines } from '../Figurines';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/figurines';

  constructor(private http: HttpClient) {}

  // GET ALL PRODUCTS FROM API
  getAll(): Observable<Figurines[]> {
    return this.http.get<Figurines[]>(this.apiUrl);
  }

  // GET ONE PRODUCT FROM API
  getOne(id: number): Observable<Figurines> {
    return this.http.get<Figurines>(`${this.apiUrl}/${id}`);
  }
}
