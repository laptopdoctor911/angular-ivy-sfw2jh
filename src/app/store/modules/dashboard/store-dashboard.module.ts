import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

 const routes: Routes = [{path: '', component: DashboardComponent}]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
  RouterModule.forChild(routes)]
})
export class StoreDashboardModule {}