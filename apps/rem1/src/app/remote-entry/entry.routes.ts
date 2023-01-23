import { Route } from '@angular/router';
import { appRoutes } from '../app.routes';
import { TestchildComponent } from '../testchild/testchild.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntryComponent}];
