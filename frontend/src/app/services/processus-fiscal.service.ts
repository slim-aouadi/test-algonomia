import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProcessusFiscal } from 'src/models/ProcessusFiscal';

@Injectable({
  providedIn: 'root',
})
export class ProcessusFiscalService {
  constructor(private http: HttpClient) {}

  getProcessusFiscalList() {
    return this.http.get<ProcessusFiscal[]>(
      `${environment.apiUrl}/processusFiscal`
    );
  }
  getProcessusFiscauxGroupByYear() {
    return this.http.get<any[]>(
      `${environment.apiUrl}/processusFiscal/groupByYear`
    );
  }
}
