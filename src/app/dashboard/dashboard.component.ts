import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  showContent: Boolean = true;
  screenHeight: any;
  screenWidth: any;

  onOpen() {
    this.showContent = this.showContent = true;
  }
  onClose() {
    this.showContent = this.showContent = false;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if(this.screenWidth < 1000){
      this.onClose();
    }
    else{
      this.onOpen();
    }
  }

  constructor() {}

  ngOnInit() {
    if(this.screenWidth < 1000){
      this.onClose();
    }

    else{
      this.onOpen();
    }
  }
}
