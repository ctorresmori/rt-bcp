import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { latLng } from 'leaflet';
import { AgencyModel } from '../../models/agency.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-model-agency-location',
  templateUrl: './model-agency-location.component.html',
  styleUrls: ['./model-agency-location.component.scss']
})
export class ModelAgencyLocationComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AgencyModel,
    public dialogRef: MatDialogRef<ModelAgencyLocationComponent>
  ) {}
  positionInit: L.LatLngExpression = [-12.07117086743542, -77.04016149044038];
  map!: L.Map;
  markers: L.Marker[] = [];

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    const icon = new L.Icon({
      iconUrl: 'assets/images/marker.png',
      iconSize: [64, 64]
    });

    this.map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.setView([+this.data.lon, +this.data.lat], 15);
    L.marker([+this.data.lon, +this.data.lat], {
      icon
    }).addTo(this.map);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
