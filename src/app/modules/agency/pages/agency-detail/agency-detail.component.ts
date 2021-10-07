import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { AgencyModel } from '../../models/agency.model';
import { AgencyService } from '../../services/agency.service';

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
    private snackbarService: SnackbarService
  ) {
    this.agencyForm = this.fb.group({
      name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      district: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lon: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.agencyService.retrieveAgencyData();
    this.setFormData();
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
    const agencies = [...this.agencyService.agencys.value];
    agencies[+this.agencyId] = newAgency;
    this.agencyService.setAgenciesStorage(agencies);
    setTimeout(() => {
      this.loading = true;
      this.router.navigateByUrl('/dashboard/agencias');
      this.snackbarService.openSnackBar('Información actualizada correctamente 😎👌', 2);
    }, 2000);
  }
}
