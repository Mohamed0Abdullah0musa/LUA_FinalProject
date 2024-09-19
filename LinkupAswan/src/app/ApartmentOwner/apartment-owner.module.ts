import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const apartmentRoutes: Routes = [

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(apartmentRoutes)
  ]
})
export class ApartmentOwnerModule { }
