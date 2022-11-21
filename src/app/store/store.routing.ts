import { Routes } from '@angular/router';
import {ReportsComponent} from './components/reports/reports.component';
import { StoreLayoutComponent } from './components/store-layout/store-layout.component';

export const childRoutes: Routes = [
  {path: '',
  component: StoreLayoutComponent,
  children: [
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/store-dashboard.module').then ((m) => m.StoreDashboardModule)
  },
  {path: 'reports', component: ReportsComponent}]}];