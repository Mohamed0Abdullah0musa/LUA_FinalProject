import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complete-your-profile',
  templateUrl: './complete-your-profile.component.html',
  styleUrl: './complete-your-profile.component.css'
})
export class CompleteYourProfileComponent {
completeProfileForm :FormGroup;

constructor(private complete: FormBuilder) {
  this.completeProfileForm = this.complete.group({


  })
}

  onSubmit() {
    if (this.completeProfileForm.valid) {
      console.log('Form submitted', this.completeProfileForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

}