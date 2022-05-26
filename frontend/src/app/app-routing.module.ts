import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGroupByYearComponent } from './data-group-by-year/data-group-by-year.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTimelineComponent } from './data-timeline/data-timeline.component';

const routes: Routes = [


  { path: 'data-table', component: DataTableComponent },
  { path: 'data-timeline', component: DataTimelineComponent },
  { path: 'data-groupByYear', component: DataGroupByYearComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
