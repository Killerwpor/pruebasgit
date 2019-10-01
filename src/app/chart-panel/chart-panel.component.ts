import { barData } from './../barData';
import { chartsData } from './../chartsData';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
})
export class ChartPanelComponent implements OnInit {

  @Input() name: string;
  @Input() charts;
  barToggle: boolean;

  chosenChart: any;

  constructor() { }

  loadChart(type, index){
    switch(type){
      case "bar":
        this.barToggle = true;
        this.chosenChart = this.charts.barCharts[index];
      break;
    }
  }

  refreshCharts(){
    this.chosenChart = this.charts;
  }

  ngOnInit() {
    this.refreshCharts();
  }

}
