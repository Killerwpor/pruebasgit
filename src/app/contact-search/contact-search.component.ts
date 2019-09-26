import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {

  constructor() { }

  //Activar la la funcion de agreggar usuario
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  openUserForm(){
    this.addUser.emit(null);
  }

  ngOnInit() {
  }

}
