import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44351/api/cars";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCarDetails() : Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getdetail';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrand(brandId: number) : Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getdetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByColor(colorId: number) : Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getdetailbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  } 

  getCarDetailsByCarId(carId: number) : Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getdetailbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  
}
