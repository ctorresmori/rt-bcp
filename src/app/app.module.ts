import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { DashboardLayoutModule } from './layout/dashboard-layout/dashboard-layout.module';
import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    RouterModule,
    DashboardLayoutModule,
    AuthLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
