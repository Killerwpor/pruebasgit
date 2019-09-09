import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  
  public doughnutChartData = [120,150,77,46];
  public doughnutChartLabels = ['Data 1','Data 2','Data 3','Data 4'];
  public doughnutChartType = "doughnut";

  constructor() { }

  ngOnInit() {
  }

}
