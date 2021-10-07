import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/layout/dashboard-layout/services/navbar.service';
import { AgencyModel } from '../../models/agency.model';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  agencies: AgencyModel[] = [];

  constructor(
    public agencyService: AgencyService,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.navbarService.setPageNavMode();
    this.navbarService.setTitle('Agencia');
    this.agencyService.retrieveAgencyData();
  }
}
