import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = 'https://localhost:44351/api/cards';

  constructor(
    private httpClient: HttpClient,
  ) {}

  add(card: Card): Observable<ResponseModel> {
     return this.httpClient.post<ResponseModel>(this.apiUrl + "/add", card);
  }

  getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
     let newPath = this.apiUrl + "/getcardsbycustomerid?customerId=" + customerId;
     return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
}
