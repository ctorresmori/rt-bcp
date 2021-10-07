import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LOADERS_ENUM } from './modules/shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'reto-tecnico-bcp';
  LOADERS_ENUM = LOADERS_ENUM;
  loading = true;
  loaderTimer = 1000;

  constructor(public spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, this.loaderTimer);
  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner.hide();
    }, this.loaderTimer);
  }
}
