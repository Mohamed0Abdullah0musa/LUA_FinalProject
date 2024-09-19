import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  AddListingDriverComponent } from './Tourist/add-list-driver/add-list-driver.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginTouristComponent } from './Tourist/login-tourist/login-tourist.component';
import { RegistrationTouristComponent } from './Tourist/registration-tourist/registration-tourist.component';
import { routes } from './app.routes';
import { ListingSubmittedComponent } from './listing-submitted/listing-submitted.component';
import { CompleteYourProfileComponent } from './complete-your-profile/complete-your-profile.component';
import { AddTourComponent } from './add-tour/add-tour.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginTouristComponent,
    RegistrationTouristComponent,
    AddListingDriverComponent,
    ListingSubmittedComponent,
    CompleteYourProfileComponent,
    AddTourComponent
  ],
 
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
