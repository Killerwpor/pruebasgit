import { element } from "protractor";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  // sidebar
  private _opened: boolean = false;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }



  // contactpanel
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  visible: boolean = true;

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null); //emit event here
    } else {
      this.close.emit(null);
    }
  }

  ngOnInit() {}
}
