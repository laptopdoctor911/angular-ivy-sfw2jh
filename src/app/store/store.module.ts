import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { childRoutes} from './store.routing';
import {ReportsComponent} from './components/reports/reports.component';
import { StoreDashboardModule } from './modules/dashboard/store-dashboard.module';
import { StoreLayoutComponent } from './components/store-layout/store-layout.component';

@NgModule({
  declarations: [
    ReportsComponent,
    StoreLayoutComponent
  ],
  imports: [
    StoreDashboardModule,
  RouterModule.forChild(childRoutes)]
})
export class StoreModule {}