// Login
import { LoginComponent } from './login/login.component';

// Dashboard
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartPanelComponent } from "./chart-panel/chart-panel.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dash",
    component: DashboardComponent,
    children: [
      {
        path: "chart-panel",
        component: ChartPanelComponent,
        children: [
          { path: "bar-chart", component: BarChartComponent },
          { path: "doughnut-chart", component: DoughnutChartComponent },
          { path: "radar-chart", component: RadarChartComponent },
          { path: "pie-chart", component: PieChartComponent },
          { path: "line-chart", component: LineChartComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
