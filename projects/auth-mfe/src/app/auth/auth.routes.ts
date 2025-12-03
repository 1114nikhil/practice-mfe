import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registraion } from './registraion/registraion';

export const authRoutes: Routes = [
  { path: 'login', component: Login},
  { path: 'register', component: Registraion }
];