import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'authMfe',
        exposedModule: './AuthRoutes'
      }).then(m => m.authRoutes)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'dashboardMfe',
        exposedModule: './DashboardRoutes'
      }).then(m => m.dashboardRoutes)
  },

  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
