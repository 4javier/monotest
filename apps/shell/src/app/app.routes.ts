import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'rem2',
    loadChildren: () =>
      loadRemoteModule('rem2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote_app',
    loadChildren: () =>
      loadRemoteModule('rem1', './Routes').then((m) => m.remoteRoutes),
  },

];
