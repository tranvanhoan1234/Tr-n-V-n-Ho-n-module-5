import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../module/customer';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const URL_API = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(URL_API + '/customerType');
  }
}
