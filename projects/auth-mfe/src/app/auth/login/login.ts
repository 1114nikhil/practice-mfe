import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
private fb=inject(FormBuilder)

  // constructor(private fb: FormBuilder) {}
 form = this.fb.group({
    email: [''],
    password: ['']
  });
  submit() {
    console.log('Logged in:', this.form.value);
    window.location.href = '/dashboard';
  }
}
