import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44351/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', loginModel);
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'register', registerModel);
  }

  update(customer: Customer) : Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'update', customer);
  } 

  isAuthenticated() : boolean {
    return !this.localStorageService.getToken();
  }
}
