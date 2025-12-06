import { Routes } from '@angular/router';
import { App } from './app';

export const dashboardRoutes: Routes = [
     { path: '', component: App },
     // { path: '**', redirectTo: '', pathMatch: 'full' }
];
