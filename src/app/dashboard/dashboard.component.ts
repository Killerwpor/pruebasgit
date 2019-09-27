import { contact } from './../contact';
import { simulator } from './../simulator';
import { Component, OnInit, HostListener } from "@angular/core";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  dash: Boolean = true;
  add: Boolean = false;
  showSidebar: Boolean = true;
  screenHeight: any;
  screenWidth: any;
  
  /* Configurar margenes al cargar paagina */
  ngOnInit() {
    //Cierra el navbar en caso de iniciarse en una pantalla menor a 1000px
    if(this.screenWidth < 1000){
      this.onClose();
    }
    else{
      this.onOpen();
    }

    //Inicia la lista de contactos segun el primer simulador de la lista
    this.selectedSimulator = this.simulatorList[0];
  }
  
  /* Automaticamente configurar pagina en caso de cambio de resolucion */
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

  /* Funciones para cerrar y abrir el componente de lista de contactos y simuladores */
  onOpen() {
    this.showSidebar = this.showSidebar = true;
  }
  onClose() {
    this.showSidebar = this.showSidebar = false;
  }

  // Funcion para abrir la forma de agregar usuario y cerrar el dash o vice-versa
  addUser(){
    this.dash = !this.dash;
    this.add = !this.add;
  }

  changeSimulator(newSim){
    this.selectedSimulator = newSim;
  }

  ANCHOR //El simulador que ha sido seleccionado
  selectedSimulator: simulator = {
    name: "",
    icon: "",
    contacts: 
    [
      {name: "Prueba"}
    ]
  }


  ANCHOR // Lista de todos los datos de los simuladores 
  simulatorList: simulator[] = [
    {
      name: "Seguridad",
      icon: "car",
      contacts: 
      [
        {name: "Orion"},
        {name: "Solid Snake"},
        {name: "Cloud Strife"},
        {name: "Mario"},
        {name: "Bowser"},
        {name: "Monkey D. Luffy"},
        {name: "Goku"}
      ]
    },
    {
      name: "Cadaveres",
      icon: "skull",
      contacts: 
      [
        {name: "Luke Skywalker"},
        {name: "Mad Max"},
        {name: "Froddo Baggins"},
        {name: "Harry Potter"}
      ]
    }
  ]


  constructor() {}

}
