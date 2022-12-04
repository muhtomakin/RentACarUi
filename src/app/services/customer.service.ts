import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44351/api/customers";

  constructor(private httpClient: HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "/getallcustomersdetails"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerByEmail(email: string) : Observable<SingleResponseModel<Customer>> {
    let emailPath = this.apiUrl + "/getbyemail?email=" + email;
    return this.httpClient.get<SingleResponseModel<Customer>>(emailPath);
  }

  update(customer: Customer) : Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/update", customer);
  }
}
