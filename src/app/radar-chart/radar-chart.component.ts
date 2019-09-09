import { Component, OnInit } from "@angular/core";
import { Label } from "ng2-charts";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";

@Component({
  selector: "app-radar-chart",
  templateUrl: "./radar-chart.component.html",
  styleUrls: ["./radar-chart.component.css"]
})
export class RadarChartComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[] = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ];

  public radarChartData: ChartDataSets[] = [
    {
      data: [65, 59, 90, 81, 56, 55, 40],
      label: "Series A",
      backgroundColor: "rgba(0, 230, 118,0.5)",
      pointBorderColor: "rgba(0, 230, 118,1.0)",
      pointBackgroundColor: "rgba(0, 230, 118,1.0)",
      borderColor: "rgba(0, 230, 118,1.0)"
    },
    { data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" }
  ];

  public radarChartType: ChartType = "radar";

  constructor() {}

  ngOnInit() {}
}
