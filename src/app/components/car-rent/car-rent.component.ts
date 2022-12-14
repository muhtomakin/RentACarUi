import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
   selector: 'app-car-rent',
   templateUrl: './car-rent.component.html',
   styleUrls: ['./car-rent.component.css']
})

export class CarRentComponent implements OnInit {

   rental: Rental;
   carId: number;
   addRentCarForm: FormGroup;
   currentDate: Date = new Date();

   constructor(private formBuilder: FormBuilder,
               private localStorageService: LocalStorageService,
               private activatedRoute: ActivatedRoute,
               private toastrService: ToastrService,
               private rentalService: RentalService,
               private router: Router,
               ) {   }

   ngOnInit(): void {
      this.carId = parseInt(this.activatedRoute.snapshot.paramMap.get('carId'));
      this.createAddRentCarForm();
   }

   createAddRentCarForm() {
      this.addRentCarForm = this.formBuilder.group({
         carId: [this.carId, Validators.required],
         customerId: [this.localStorageService.getCurrentCustomer().id, Validators.required],
         rentDate: ['', Validators.required],
         returnDate: ['', Validators.required]
      });
   }

   setRentingCar() {
      if (this.addRentCarForm.invalid) {
         this.toastrService.warning('Check the fills!', 'Attention!');
         return false;
      }

      this.rental = this.addRentCarForm.value;
      let rentDate = new Date(this.rental.rentDate);
      let returnDate = new Date(this.rental.returnDate);

      if (rentDate < this.currentDate) {
         this.toastrService.warning(
            'Rent date must be after these days!', 'Attention!'
         );
         return false;
      }

      if (returnDate < rentDate || returnDate.getDate() == rentDate.getDate()) {
         this.toastrService.warning(
            'Return date must be further delivery date!', 'Attention!'
         );
         return false;
      }

      this.rentalService.setRentingCar(this.rental);

      this.toastrService.success('Directed to the payment page!');
      return this.router.navigate(['/cards']);
   }

   checkCarRentable() {
      this.rentalService.getRentalsByCarId(this.carId).subscribe(responseSuccess => {

         if (responseSuccess.data[0] == null) {
            this.setRentingCar();
            return true;
         }

         let lastItem = responseSuccess.data[responseSuccess.data.length - 1];

         if (lastItem.returnDate == null) {
            return this.toastrService.error('This vehicle is not yet delivered!');
         }

         let returnDate = new Date(lastItem.returnDate);
         this.setRentingCar();

         if (new Date(this.rental.rentDate) < returnDate) {
            this.rentalService.removeRentingCar();
            return this.toastrService.warning(
               'You cannot rent this vehicle!', 'Attention!'
            );
         }
         return true;
      });
   }
}