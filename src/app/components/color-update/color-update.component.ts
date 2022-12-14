import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup;
  color: Color;

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getColorById(param['colorId']);
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;
      this.createColorUpdateForm();
    });
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.color.id, Validators.required],
      name: [this.color.name, Validators.required],
    });
  }

  update() {
    let color: Color = this.colorUpdateForm.value

    if (!this.colorUpdateForm.valid) {
       this.toastrService.warning('There is empty blank!', 'Warning!');
       return;
    }

    this.colorService.update(color).subscribe(responseSuccess => {
       return this.toastrService.success(responseSuccess.message, 'Success');
    }, responseError => {
       if (responseError.error.ValidationErrors.length == 0) {
          this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
          return;
       }

       for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(
             responseError.error.ValidationErrors[i].ErrorMessage, 'Validation Error'
          );
       }
    });
  }
}