import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDetailComponent } from './pages/agency-detail/agency-detail.component';
import { ListAgenciesComponent } from './pages/list-agencies/list-agencies.component';

const routes: Routes = [
  { path: '', component: ListAgenciesComponent },
  { path: ':id', component: AgencyDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule {}
