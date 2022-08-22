import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }

  saveCategory(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/product', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }

  updateCategory(id: number, product: Product): Observable<Product>   {
    return this.http.put<Product>(`${API_URL}/product/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
}
