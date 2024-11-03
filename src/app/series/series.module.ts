import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { ListSeriesComponent } from './list-series/list-series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent, ListSeriesComponent],
  exports: [ListSeriesComponent]
})
export class SeriesModule { }
