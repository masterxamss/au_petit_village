import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Figurines } from '../Figurines';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private jsonUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  // GET ALL PRODUCTS
  getAll(): Observable<Figurines[]> {
      return this.http.get<{ figurines: Figurines[] }>(this.jsonUrl).pipe(
        map(response => response.figurines),
        catchError(error => {
          console.error('Error loading products', error);
          return of([]);
        })
      );
  }

  // GET ONE PRODUCT
  getOne(id: number): Observable<Figurines | undefined> {
    return this.getAll().pipe(
      map(figurines => figurines.find(figure => figure.id === id)),
      catchError(error => {
        console.error('Error when searching for the product', error);
        return of(undefined);
      })
    );
  }
}
