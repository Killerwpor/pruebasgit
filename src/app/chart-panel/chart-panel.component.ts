import { BarChartComponent } from "./../bar-chart/bar-chart.component";
import { barData } from "./../barData";
import { chartsData } from "./../chartsData";
import { faCoffee, faSkull, faPizzaSlice, faCar, faBicycle, faHamburger, faMountain } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-chart-panel",
  templateUrl: "./chart-panel.component.html",
  styleUrls: ["./chart-panel.component.css"]
})
export class ChartPanelComponent implements OnInit {

  // Variables for icons 
  faCoffee = faCoffee;
  faSkull = faSkull;
  faBurger = faHamburger;
  faPizza = faPizzaSlice;
  faBike = faBicycle;
  faCar = faCar;
  faMountain = faMountain;

  @Input() name: string;
  @Input() charts;
  @Input() icon: string;
  
  show: boolean = true;
  toggle: string;

  chosenChart: any;

  constructor() {}

  loadChart(type, index) {
    switch (type) {
      case "bar":
        this.toggle = "bar";
        this.chosenChart = this.charts.barCharts[index];
        break;
      case "doughnut":
        this.toggle = "doughnut";
        this.chosenChart = this.charts.doughnutCharts[index];
        break;
      case "radar":
        this.toggle = "radar";
        this.chosenChart = this.charts.radarCharts[index];
        break;
      case "pie":
        this.toggle = "pie";
        this.chosenChart = this.charts.pieCharts[index];
        break;
      case "line":
        this.toggle = "line";
        this.chosenChart = this.charts.lineCharts[index];
        break;
    }
  }

  refreshCharts() {
    if(this.charts.lineCharts != null){
      this.chosenChart = this.charts.lineCharts[0];
    }
  }
  
  ngOnInit() {
    this.chosenChart = this.charts;
  }
}
