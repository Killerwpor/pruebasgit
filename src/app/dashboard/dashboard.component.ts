import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showContent: Boolean = true;

  onOpen(){
    this.showContent = this.showContent = true;
  }

  onClose(){
    this.showContent = this.showContent = false;
  }

  constructor() { }

  ngOnInit() {

  }
}
