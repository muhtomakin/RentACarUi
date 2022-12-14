import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private colorService:ColorService,
    private toastrService:ToastrService,
  ) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name:["", Validators.required],      
    })
  }

  add() {
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value) 
      console.log(colorModel)
      this.colorService.add(colorModel).subscribe(response => {
        console.log(response)
        this.toastrService.success("Success", response.message)
      })
    } else {
      this.toastrService.error("Validation Error")
    }
  }
}