import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registraion',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './registraion.html',
  styleUrl: './registraion.scss',
})
export class Registraion {
  private fb=inject(FormBuilder)
form = this.fb.group({
    name: [''],
    email: [''],
    password: ['']
  });



  submit() {
    console.log('Registered:', this.form.value);
    window.location.href = '/auth/login';
  }
}
