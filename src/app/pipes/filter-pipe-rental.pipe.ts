import { Pipe, PipeTransform } from '@angular/core';
import { RentDetail } from '../models/rentDetail';

@Pipe({
  name: 'filterPipeRental'
})
export class FilterPipeRentalPipe implements PipeTransform {
  transform(value: RentDetail[], filterTextRental: string): RentDetail[] {
    filterTextRental = filterTextRental ? filterTextRental.toLocaleLowerCase() : "";
    return value;
  }
}
