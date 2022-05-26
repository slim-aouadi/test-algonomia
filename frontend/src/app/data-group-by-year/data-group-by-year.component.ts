import { Component, OnInit } from '@angular/core';
import { ProcessusFiscal } from 'src/models/ProcessusFiscal';
import { ProcessusFiscalService } from '../services/processus-fiscal.service';

@Component({
  selector: 'app-data-group-by-year',
  templateUrl: './data-group-by-year.component.html',
  styleUrls: ['./data-group-by-year.component.css']
})
export class DataGroupByYearComponent implements OnInit {

  processusFiscaux: any[] = [];
  constructor(private processusFiscalService: ProcessusFiscalService) {}

  ngOnInit(): void {
    this.processusFiscalService.getProcessusFiscauxGroupByYear().subscribe((data) => {
      this.processusFiscaux=data;
    });
  }

}
