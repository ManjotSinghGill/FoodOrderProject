import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOtpInputModule } from 'ngx-otp-input';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodresultsComponent } from './foodresults/foodresults.component';
import { LoginComponent } from './login/login.component';
import { MapresultsComponent } from './mapresults/mapresults.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    DashboardCompComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FoodresultsComponent,
    LoginComponent,
    MapresultsComponent,
    RestaurantsComponent,
    ProfileComponent,
    CheckoutComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxOtpInputModule,
  ]
})
export class DashboardModule { }
