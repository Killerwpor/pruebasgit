import { ChartDataSets } from "chart.js";
import { Component, OnInit, Input } from "@angular/core";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"]
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartOptions = {
    responsive: true,
    maintainAspectRation: false,
  };

  @Input() doughnutChartData: MultiDataSet;
  @Input() doughnutColors: Array<any>;
  @Input() doughnutChartLabels;

  public doughnutChartType = "doughnut";

  constructor() {}

  ngOnInit() {}
}
