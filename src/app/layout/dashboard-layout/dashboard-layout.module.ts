import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent, DashboardLayoutComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [RouterModule],
})
export class DashboardLayoutModule {}
