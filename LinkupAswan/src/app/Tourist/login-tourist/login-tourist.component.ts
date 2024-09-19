import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-tourist',
  templateUrl: './login-tourist.component.html',
  styleUrl: './login-tourist.component.css'
})
export class LoginTouristComponent {
    loginForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
      });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Form Submitted', this.loginForm.value);
      
      } else {
        console.log('Form is not valid');
      }
    }
  }