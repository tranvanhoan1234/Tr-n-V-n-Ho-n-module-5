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
  //
  // saveProduct(product) {
  //   this.products.push(product);
  // }
  //
  // findById(id: number) {
  //   return this.products.find(product => product.id === id);
  // }
  //
  // updateProduct(id: number, product: Product) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       this.products[i] = product;
  //     }
  //   }
  // }
  //
  // deleteProduct(id: number) {
  //   this.products = this.products.filter(product => {
  //     return product.id !== id;
  //   });
  // }
}
