import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/layout/dashboard-layout/services/navbar.service';
import { LoaderService } from 'src/app/modules/shared/services/loader.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
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
    private navbarService: NavbarService,
    private router: Router,
    private snackbarService: SnackbarService,
    private loadingService: LoaderService
  ) {}

  ngOnInit(): void {
    this.navbarService.setPageNavMode();
    this.navbarService.setTitle('Agencia');
    this.agencyService.retrieveAgencyData();
  }

  agencyClick(i: number) {
    this.router.navigateByUrl('/dashboard/agencias/' + i);
  }

  favoriteClick(i: number) {
    this.agencyService.changeFavoriteAgency(i);
    const status = this.agencyService.getAgencyById(i).favorite;
    this.loadingService.setLoader();
    setTimeout(() => {
      this.snackbarService.openSnackBar(
        status ? 'Añadido a favoritos 💖' : 'Removido de favoritos 💔',
        1
      );
      this.loadingService.removeLoader();
    }, 1400);
  }
}
