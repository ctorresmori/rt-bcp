import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { photosBuildingsMock } from 'src/app/core/mocks/photos.mock';
import { NavbarService } from 'src/app/layout/dashboard-layout/services/navbar.service';
import { LoaderService } from 'src/app/modules/shared/services/loader.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { ModelAgencyLocationComponent } from '../../components/model-agency-location/model-agency-location.component';
import { AgencyModel } from '../../models/agency.model';
import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  agencies: AgencyModel[] = [];
  photos: string[] = [];

  constructor(
    public agencyService: AgencyService,
    private navbarService: NavbarService,
    private snackbarService: SnackbarService,
    private loadingService: LoaderService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.navbarService.setPageNavMode();
    this.navbarService.setTitle('Agencia');
    this.agencyService.retrieveAgencyData();
    this.setRandomPhotos();
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

  seeLocation(i: number) {
    this.dialog.open(ModelAgencyLocationComponent, {
      width: '500px',
      data: {
        ...this.agencyService.getAgencyById(i)
      }
    });
  }

  setRandomPhotos() {
    this.agencyService.agencys$.value.forEach(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      this.photos = [...this.photos, photosBuildingsMock[randomNumber]];
    });
  }
}
