import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const appRoutes: Route[] = [

{path: '', component: LayoutComponent,  children: [
    {path: 'store',  loadChildren: () => import('./store/store.module').then(m => m.StoreModule)}
  ],}

]