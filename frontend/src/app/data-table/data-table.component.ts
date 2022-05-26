import { Component, OnInit } from '@angular/core';
import { FilterArrayPipe } from '../_filters/filter-array.pipe';
import { ProcessusFiscalService } from '../services/processus-fiscal.service';
import { ProcessusFiscal } from 'src/models/ProcessusFiscal';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [FilterArrayPipe],
})
export class DataTableComponent implements OnInit {
  processusFiscaux: ProcessusFiscal[] = [];
  query: string = '';
  constructor(private processusFiscalService: ProcessusFiscalService) {}

  ngOnInit(): void {
    this.processusFiscalService.getProcessusFiscalList().subscribe((data) => {
      this.processusFiscaux = data;
    });
  }
}
