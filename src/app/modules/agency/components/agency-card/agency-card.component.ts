import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgencyModel } from '../../models/agency.model';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent {
  @Input() agency!: AgencyModel;
  @Input() order!: number;
  @Output() agencySelected = new EventEmitter();
  @Output() favoriteSelected = new EventEmitter();

  agencyClick() {
    this.agencySelected.emit(this.order);
  }

  changeFavoriteAgency() {
    this.favoriteSelected.emit(this.order);
  }
}
