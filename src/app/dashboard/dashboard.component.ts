import { simulator } from './../simulator';
import { Component, OnInit, HostListener } from "@angular/core";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  dash: Boolean = false
  add: Boolean = true;
  showSidebar: Boolean = true;
  screenHeight: any;
  screenWidth: any;
  
  /* Configurar margenes al cargar paagina */
  ngOnInit() {
    if(this.screenWidth < 1000){
      this.onClose();
    }

    else{
      this.onOpen();
    }
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

  userSimulators: simulator[] = [
    {
      name: "simulador 1"
    },
    {
      name: "simulador 2"
    }
  ]


  constructor() {}

}
