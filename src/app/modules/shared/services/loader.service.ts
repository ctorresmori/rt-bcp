import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LOADERS_ENUM } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(public spinner: NgxSpinnerService) {}

  setLoader() {
    this.spinner.show(LOADERS_ENUM.MAIN_LOADER);
  }

  removeLoader() {
    this.spinner.hide(LOADERS_ENUM.MAIN_LOADER);
  }
}
