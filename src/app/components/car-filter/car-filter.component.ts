import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css'],
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  brandFilter: number = 0;
  colorFilter: number = 0;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.brandFilter = Number(
      this.activatedRoute.snapshot.paramMap.get('brandId')
    );
    this.colorFilter = Number(
      this.activatedRoute.snapshot.paramMap.get('colorId')
    );
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  clearFilter() {
    this.brandFilter = 0;
    this.colorFilter = 0;
  }
}