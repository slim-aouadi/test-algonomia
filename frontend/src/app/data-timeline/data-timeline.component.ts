import { Component, OnInit } from '@angular/core';
import { ProcessusFiscal } from 'src/models/ProcessusFiscal';
import { ProcessusFiscalService } from '../services/processus-fiscal.service';
@Component({
  selector: 'app-data-timeline',
  templateUrl: './data-timeline.component.html',
  styleUrls: ['./data-timeline.component.css'],
})
export class DataTimelineComponent implements OnInit {
  processusFiscaux: ProcessusFiscal[] = [];
  constructor(private processusFiscalService: ProcessusFiscalService) {}

  ngOnInit(): void {
    this.processusFiscalService.getProcessusFiscalList().subscribe((data) => {
      this.processusFiscaux = data;
    });
  }
}
