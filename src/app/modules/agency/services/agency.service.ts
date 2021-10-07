import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { agentsMock } from 'src/app/core/mocks/agents.mock';
import { AgencyModel } from '../models/agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  agencys$ = new BehaviorSubject<AgencyModel[]>([]);

  retrieveAgencyData() {
    const agenciesStoraged = JSON.parse(
      localStorage.getItem('agencies') || '[]'
    );
    agenciesStoraged.length > 0
      ? this.agencys$.next(agenciesStoraged)
      : this.setAgenciesStorage(agentsMock);
  }

  setAgenciesStorage(agencies: AgencyModel[]) {
    this.agencys$.next(agencies);
    localStorage.setItem('agencies', JSON.stringify(this.agencys$.value));
  }

  getAgencyById(order: number) {
    return this.agencys$.value[order];
  }

  changeFavoriteAgency(order: number) {
    const agencies = [...this.agencys$.value];
    agencies[order].favorite = !agencies[order].favorite;
    this.setAgenciesStorage(agencies);
  }
}
