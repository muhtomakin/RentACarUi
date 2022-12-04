import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CardComponent } from './components/card/card.component';
import { ImgComponent } from './components/img/img.component';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CardSavedComponent } from './components/card-saved/card-saved.component';
import { CardSummaryComponent } from './components/card-summary/card-summary.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeCustomerPipe } from './pipes/filter-pipe-customer.pipe';
import { FilterPipeRentalPipe } from './pipes/filter-pipe-rental.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    CustomerComponent,
    FooterComponent,
    ColorComponent,
    RentalComponent,
    CardComponent,
    ImgComponent,
    AuthMenuComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    CarAddComponent,
    CarDetailComponent,
    CarFilterComponent,
    CarRentComponent,
    CarUpdateComponent,
    CardSavedComponent,
    CardSummaryComponent,
    ColorAddComponent,
    CartSummaryComponent,
    ColorUpdateComponent,
    HeroComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    FilterPipeBrandPipe,
    FilterPipeCarPipe,
    FilterPipeColorPipe,
    FilterPipeCustomerPipe,
    FilterPipeRentalPipe,
    VatAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
