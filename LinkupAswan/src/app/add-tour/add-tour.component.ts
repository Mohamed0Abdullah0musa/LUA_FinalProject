import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrl: './add-tour.component.css'
})
export class AddTourComponent {

  AddTourfileForm :FormGroup;

  constructor(private complete: FormBuilder) {
    this.AddTourfileForm = this.complete.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      duration: ['', [Validators.required, Validators.min(1)]]
  
    });
  }
  
    onSubmit() {
      if (this.AddTourfileForm.valid) {
        console.log('Form submitted', this.AddTourfileForm.value);
      } else {
        console.error('Form is invalid');
      }
    }
  
  }