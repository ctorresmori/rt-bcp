import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reto-tecnico-bcp';

  constructor(public spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
