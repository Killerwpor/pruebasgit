import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';


@NgModule({
  declarations: [
    RadarChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    PieChartComponent,
    AppComponent,
    ChartPanelComponent,
    DashboardComponent,
    ContactPanelComponent,
    MessagePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
