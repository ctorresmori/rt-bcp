import { Component, OnInit } from '@angular/core';
import { AgencyModel } from '../../models/agency.model';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  agencies: AgencyModel[] = [];

  constructor(public agencyService: AgencyService) {}

  ngOnInit(): void {
    this.agencyService.retrieveAgencyData();
  }
}
