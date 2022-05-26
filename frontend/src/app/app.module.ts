import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTimelineComponent } from './data-timeline/data-timeline.component';
import { FilterArrayPipe } from './_filters/filter-array.pipe';
import { DataGroupByYearComponent } from './data-group-by-year/data-group-by-year.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTimelineComponent,
    FilterArrayPipe,
    DataGroupByYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
