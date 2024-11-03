import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit {

  series: Serie[] = [];
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
    });
  }

  getAverageSeasons(): number {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return Math.round(totalSeasons / this.series.length);
  }  

}
