import { ChartDataSets } from 'chart.js';
import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartOptions={
    responsive: true,
    maintainAspectRation: true
  }
  
  public doughnutChartData: MultiDataSet = [
    [60,40],
    [50,50],
    [30,70],
  ];

  public doughnutColors: Array<any> = [
    { 
      backgroundColor: ['#40b987', 'rgba(0,0,0,0)'],
      borderColor: 'rgba(0,0,0,0)'
    },
    { 
      backgroundColor: ['rgba(0, 229, 255,1.0)', 'rgba(0,0,0,0)'],
      borderColor: 'rgba(0,0,0,0)'
    },
    { 
      backgroundColor: ['rgba(255, 82, 82,1.0)', 'rgba(0,0,0,0)'],
      borderColor: 'rgba(0,0,0,0)'
    }
  ]

  public progressChartData: MultiDataSet = [
    [50,50],
    [80,20],
    [30,70]
  ];

  public doughnutChartLabels = ["hola", ""];
  public doughnutChartType = "doughnut";

  constructor() { }

  ngOnInit() {
  }

}
