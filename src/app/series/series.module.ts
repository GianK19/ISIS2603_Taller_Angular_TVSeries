import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSeriesComponent } from './list-series/list-series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListSeriesComponent],
  exports: [ListSeriesComponent]
})
export class SeriesModule { }
