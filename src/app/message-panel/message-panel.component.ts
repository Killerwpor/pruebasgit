import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css']
})
export class MessagePanelComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.chosenText = this.simulatorTexts[0];
  }

  //EL input de los textos del simulador escogido
  @Input() simulatorTexts: string[];

  //El texto a mostrar
  chosenText: string;

  //Al oprimir los botones arriba del cuadro de texto cambia el texto mostrado
  changeText(type){
    if(type == "messages"){
      this.chosenText = this.simulatorTexts[0];
    }
    else if(type == "observations"){
      this.chosenText = this.simulatorTexts[1];
    }
  }


}
