import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartData = [120,150,77,46];
  public pieChartLabels = ['Data 1','Data 2','Data 3','Data 4'];
  public pieChartType = "pie";
  public pieChartOptions = {
    responsive: true
  }

  constructor() { }

  ngOnInit() {
  }

}
