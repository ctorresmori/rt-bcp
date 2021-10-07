import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AgencyModel } from '../../models/agency.model';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent {
  @Input() agency!: AgencyModel;
  @Input() order!: number;

  constructor(private router: Router) {}

  agencyClick() {
    this.router.navigateByUrl('/dashboard/agencias/' + this.order);
  }
}
