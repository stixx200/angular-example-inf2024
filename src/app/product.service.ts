import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  receiveProducts() {
    const result$ = this.http.get<{ products: Product[] }>(
      'https://dummyjson.com/products'
    );
    return result$.pipe(
      map((body: { products: Product[] }) => {
        return body.products;
      })
    );
  }
}
