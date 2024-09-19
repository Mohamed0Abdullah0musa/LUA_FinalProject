import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/AboutUs/aboutus/aboutus.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FAQComponent } from './Components/faq/faq.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

const sharedRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'faq', component: FAQComponent },
]

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    FAQComponent,
    NotFoundComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(sharedRoutes),
      FormsModule,
  ],

})
export class SharedModule { }
