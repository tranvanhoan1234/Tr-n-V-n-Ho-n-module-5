import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URL_API =`${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
 })
export class CustomerService {

  constructor(private httpClient:HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(URL_API + '/customer');
  }
  saveCustomer(customer){
    return this.httpClient.post<Customer>(URL_API + '/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${URL_API}/customer/${id}`);
    // return this.httpClient.get<Customer>(URL_API + '/customer/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer>   {
    return this.httpClient.put<Customer>(`${URL_API}/customer/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${URL_API}/customer/${id}`);
  }
  searchCustomer(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${URL_API}/customer?q=` + name);
  }

}
