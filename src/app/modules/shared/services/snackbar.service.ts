import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  message = new BehaviorSubject<string>('');
  duration = new BehaviorSubject<number>(5);

  constructor(private snackBarService: MatSnackBar) {}

  openSnackBar(message?: string, duration?: number, actionMessage?: string) {
    this.message.next(message || 'Operación finalizada');
    this.duration.next(duration || 5);

    this.snackBarService.openFromComponent(SnackbarComponent, {
      duration: this.duration.value * 1000,
      data: {
        action: actionMessage || 'Ok'
      }
    });
  }
}
