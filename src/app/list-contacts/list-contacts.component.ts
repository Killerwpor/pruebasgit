import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contacts

  constructor() { }

  ngOnInit() {
  }

}
