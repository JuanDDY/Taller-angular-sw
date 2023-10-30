import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  promedioTemporadas: number = 0;

  constructor() { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  darPromedio(): number {
    
    let sumatoria: number = 0

    for (let i = 0; i < this.series.length; i++) {
      console.log(this.series[i].temporadas);
      sumatoria += this.series[i].temporadas;
    }
    return sumatoria / this.series.length;
  }


  ngOnInit() {
    this.series = this.getSeriesList();
    this.promedioTemporadas = this.darPromedio();
  }

}