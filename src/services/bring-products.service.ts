import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/models/products/products.model';

@Injectable({
  providedIn: 'root',
})
export class BringProductsService {
  httpClient = inject(HttpClient);
  url: string =
    'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  public bringProducts(): Observable<Products> {
    return this.httpClient.get<Products>(this.url);
  }
}
