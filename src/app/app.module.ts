import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SidebarModule } from 'ng-sidebar';


import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListSimulatorsComponent } from './list-simulators/list-simulators.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    RadarChartComponent,
    DoughnutChartComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    AppComponent,
    ChartPanelComponent,
    DashboardComponent,
    ContactPanelComponent,
    MessagePanelComponent,
    NavbarComponent,
    ListSimulatorsComponent,
    ListContactsComponent,
    LineChartComponent,
    SidebarComponent,
    ContactSearchComponent,
    LoginComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    AngularFontAwesomeModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
