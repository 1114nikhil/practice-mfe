import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        type:'module',
        remoteEntry:'http://localhost:4300/remoteEntry.js',
        exposedModule: './AuthRoutes'
      }).then(m => m.authRoutes)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type:'module',
        remoteEntry:'http://localhost:4400/remoteEntry.js',
        exposedModule: './DashboardRoutes'
      }).then(m => m.dashboardRoutes)
  }
];
