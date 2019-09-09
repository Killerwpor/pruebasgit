import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  
  public doughnutChartData: MultiDataSet = [
    [60,40],
    [50,50],
    [30,70],
  ];
  public doughnutChartLabels = ['Data 1','Data 2'];
  public doughnutChartType = "doughnut";

  constructor() { }

  ngOnInit() {
  }

}
