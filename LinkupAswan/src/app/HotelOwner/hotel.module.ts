import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const hotelRoutes: Routes = [

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(hotelRoutes)
  ]
})
export class HotelModule { }
