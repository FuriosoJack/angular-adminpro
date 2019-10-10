import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: Label[];

  @Input('data') doughnutChartData: MultiDataSet;

  @Input('type') doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
