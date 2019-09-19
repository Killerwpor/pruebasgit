import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private modalService: NgbModal) { }

  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  closeResult: string;

  ngOnInit() {
    
  }

}
