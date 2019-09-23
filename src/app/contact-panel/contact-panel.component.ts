import { contact } from './../contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css']
})
export class ContactPanelComponent implements OnInit {

  chosen : contact = {
    name: "Orion",
    id: "S4M0Y3D",
    mail: "orion@dreamhouse.com.co",
    phone: "+573206115544",
    company: "Dreamhouse Studios",
    job: "Vice-president"
  };

  constructor() { }

  ngOnInit() {
  }

}
