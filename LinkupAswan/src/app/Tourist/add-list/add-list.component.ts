import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {

  constructor(private router: Router) {}

  goToNextForm() {
    this.router.navigate(['/another-form']);
  }
  currentForm: number = 1;

  showForm(formNumber: number) {
    this.currentForm = formNumber;
  }
}
