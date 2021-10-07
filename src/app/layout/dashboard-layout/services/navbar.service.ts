import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  titleNav$ = new BehaviorSubject<string>('');
  pageNav$ = new BehaviorSubject<boolean>(true);

  setTitle(title: string) {
    this.titleNav$.next(title);
  }

  setPageNavMode() {
    this.pageNav$.next(true);
  }

  setModalNavMode() {
    this.pageNav$.next(false);
  }
}
