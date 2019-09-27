import { contact } from './../contact';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contacts;
  @Output() chooseContact = new EventEmitter<contact>();

  selectContact(contact){
    this.chooseContact.emit(contact);
  }

  constructor() { }

  ngOnInit() {
  }

}
