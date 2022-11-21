import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
