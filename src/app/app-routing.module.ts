import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/car-detail/car-detail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';
import { CardSavedComponent } from './components/card-saved/card-saved.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent, canActivate:[LoginGuard] },  

  { path: "cars", component: CarComponent, canActivate:[LoginGuard] },  
  { path: "cars/add", component: CarAddComponent, canActivate:[LoginGuard] },
  { path: "cars/update/:carId", component: CarUpdateComponent, canActivate:[LoginGuard] },
  { path: "cars/detail/:carId", component: CardetailComponent, canActivate:[LoginGuard] },
  { path: "cars/filter/:brandId/:colorId", component: CarComponent, canActivate:[LoginGuard] },

  { path: "colors", component: ColorComponent, canActivate:[LoginGuard] },
  { path: "colors/add", component: ColorAddComponent, canActivate:[LoginGuard] },
  { path: "colors/update/:colorId", component: ColorUpdateComponent, canActivate:[LoginGuard] },

  { path: "brands", component: BrandComponent, canActivate:[LoginGuard] },
  { path: "brands/add", component: BrandAddComponent, canActivate:[LoginGuard] },
  { path: "brands/update/:brandId", component: BrandUpdateComponent, canActivate:[LoginGuard] },

  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "auth/profile", component: ProfileComponent, canActivate:[LoginGuard] },
  
  { path: "customers", component: CustomerComponent, canActivate:[LoginGuard] },
  { path: "rentals", component: RentalComponent, canActivate:[LoginGuard] },

  { path: 'cards', component: CardComponent, canActivate:[LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }