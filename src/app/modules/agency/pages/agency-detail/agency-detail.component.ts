import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from 'src/app/layout/dashboard-layout/services/navbar.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { AgencyModel } from '../../models/agency.model';
import { AgencyService } from '../../services/agency.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {
  agencyForm: FormGroup;
  agencyToEdit!: AgencyModel;
  agencyId!: string;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private agencyService: AgencyService,
    private fb: FormBuilder,
    private router: Router,
    private locationService: Location,
    private snackbarService: SnackbarService,
    private navbarService: NavbarService
  ) {
    this.agencyForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      direction: ['', [Validators.required, Validators.maxLength(100)]],
      district: ['', [Validators.required, Validators.maxLength(30)]],
      lat: ['', [Validators.required]],
      lon: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.navbarService.setModalNavMode();
    this.navbarService.setTitle('Detalle de Agencia');
    this.agencyService.retrieveAgencyData();
    this.setFormData();
  }

  get f() {
    return this.agencyForm.controls;
  }

  backButton() {
    this.locationService.back();
  }

  setFormData() {
    this.agencyId = this.route.snapshot.paramMap.get('id') ?? '0';
    this.agencyToEdit = this.agencyService.getAgencyById(+this.agencyId);
    this.agencyForm.patchValue({
      name: this.agencyToEdit.agencia,
      direction: this.agencyToEdit.direccion,
      district: this.agencyToEdit.distrito,
      lat: this.agencyToEdit.lat,
      lon: this.agencyToEdit.lon
    });
  }

  updateAgency() {
    this.loading = true;
    const agencyFormValues = this.agencyForm.getRawValue();
    const newAgency: AgencyModel = {
      ...this.agencyToEdit,
      agencia: agencyFormValues.name,
      direccion: agencyFormValues.direction,
      distrito: agencyFormValues.district,
      lat: agencyFormValues.lat,
      lon: agencyFormValues.lon
    };
    const agencies = [...this.agencyService.agencys$.value];
    agencies[+this.agencyId] = newAgency;
    this.agencyService.setAgenciesStorage(agencies);
    setTimeout(() => {
      this.loading = true;
      this.router.navigateByUrl('/dashboard/agencias');
      this.snackbarService.openSnackBar(
        'Información actualizada correctamente 😎👌',
        2
      );
    }, 2000);
  }
}
