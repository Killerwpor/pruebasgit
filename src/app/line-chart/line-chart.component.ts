import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [18, 8, 77, 50, 100, 130, 180], label: 'Progress' },
    //{ data: [63, 85, 15, 10, 45, 12, 1], label: 'Not Progress' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          id: 'x-axis-0',
          position: 'bottom',
          ticks: {
            fontColor: 'white'
          },
          gridLines: {
            color: 'rgba(0,0,0,0)'
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: {
            color: 'rgba(0,0,0,0)',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(64,185,135,0.5) ',
      borderColor: '#40b987',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }
}
