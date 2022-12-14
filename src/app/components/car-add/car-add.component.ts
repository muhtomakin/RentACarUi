import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private carService: CarService,
    private toastrService: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      name:["", Validators.required],
      brandId:["", Validators.required],
      colorId:["", Validators.required],
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required],
      description:["", Validators.required],
      findexPoint:["", Validators.required],
    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value) 
      this.carService.add(carModel).subscribe(response => {
        this.toastrService.success("Success", response.message)
        this.router.navigate(["cars"])
      }, responseError => {
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error") 
          }
        }      
      })
    }else{
      this.toastrService.error("Validation Error")
    }
  }
}
