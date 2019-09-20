import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: 
      [
        {
          id: 'x-axis-0',
          position: 'bottom',
          ticks:{
            fontColor: 'white',
            fontSize: 20
          },
          gridLines:{
            color: 'rgba(0,0,0,0)'
          }
        }
      ],
      yAxes: 
      [
        {
          id: 'y-axis-1',
          position: 'left',
          ticks:{
            fontColor: 'white',
            fontSize: 20
          },
          gridLines:{
            color: 'rgba(0,0,0,0)'
          }
        }
      ]
    }
  };

  public barChartLabels = ["2006", "2007", "2008", "2009"];

  public barChartType = "bar";

  public barChartLegend = true;

  public barChartData = [
    { data: [65, 42, 54, 12], label: "Serie A" },
    { data: [46, 12, 78, 45], label: "Serie B" }
  ];

  constructor() {}

  ngOnInit() {}
}
