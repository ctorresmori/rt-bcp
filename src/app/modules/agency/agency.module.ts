import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';

import { AgencyCardComponent } from './components/agency-card/agency-card.component';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';
import { ListAgenciesComponent } from './pages/list-agencies/list-agencies.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { ModelAgencyLocationComponent } from './components/model-agency-location/model-agency-location.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    ListAgenciesComponent,
    AgencyDetailComponent,
    AgencyCardComponent,
    ModelAgencyLocationComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    SharedModule,
    MatDialogModule,
    LeafletModule
  ]
})
export class AgencyModule {}
