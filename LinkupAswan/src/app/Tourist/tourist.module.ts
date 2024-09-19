import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Shared/Components/home/home.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { LoginTouristComponent } from './login-tourist/login-tourist.component';
import { RegistrationTouristComponent } from './registration-tourist/registration-tourist.component';

const touristRoutes: Routes = [
  {path: 'login',component:LoginTouristComponent},
  {path:'register',component:RegistrationTouristComponent},
  { path: 'profile', component: PersonalInformationComponent },
  { path: 'payment', component: PaymentDetailsComponent },
  { path: 'settings', component: SettingsComponent },
]

@NgModule({
  declarations: [
    PersonalInformationComponent,
    PaymentDetailsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(touristRoutes),
    FormsModule,
  ],
  
})
export class TouristModule { }
