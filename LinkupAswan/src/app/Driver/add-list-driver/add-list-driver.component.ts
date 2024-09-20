import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-listing-driver',
    templateUrl: './add-list-driver.component.html',
  styleUrl: './add-list-driver.component.css'
})
export class AddListingDriverComponent {
  listingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.listingForm = this.fb.group({
        // Owner Detail Fields
        ownerFirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        ownerLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        ownerContactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]], // Only digits, Min length 10, Max length 15
        ownerEmail: ['', [Validators.required, Validators.email, Validators.maxLength(100)]], // Valid email, Max length 100
        ownerAddress: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]], // Min length 10, Max length 200
        ownerState: ['', Validators.required], // Required, value from dropdown
        ownerCity: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
      
        // Cab Detail Fields
        carName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        carType: ['', Validators.required], // Required, selected value from radio buttons
        carModel: ['', Validators.required], // Required, selected value from dropdown
        modelYear: ['', [Validators.required, Validators.pattern('^(19|20)\\d{2}$')]], // Year between 1900 and 2099
      
        // Driver Detail Fields
        driverTitle: ['Mr', Validators.required], // Default 'Mr', required
        driverFirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        driverLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        driverContactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]], // Only digits, Min length 10, Max length 15
        driverLicenseNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]], // Min length 5, Max length 20
        driverState: ['', Validators.required], // Required, value from dropdown
        driverCity: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]], // Min length 2, Max length 50
        driverAddress: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]], // Min length 10, Max length 200
      });
      
  }

  onSubmit() {
    if (this.listingForm.valid) {
      console.log('Form submitted', this.listingForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  }
}
