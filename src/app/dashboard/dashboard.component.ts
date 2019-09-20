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
      console.log("se cerro la ventana");
      this.onClose();
    }
    else{
      console.log("se abrio la ventana");
      this.onOpen();
    }
  }

  constructor() {}

  ngOnInit() {}
}
