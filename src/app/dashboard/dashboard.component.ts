import { contact } from "./../contact";
import { simulator } from "./../simulator";
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
    if (this.screenWidth < 1000) {
      this.onClose();
    } else {
      this.onOpen();
    }

    //Inicia la lista de contactos segun el primer simulador de la lista
    this.selectedSimulator = this.simulatorList[0];

    this.selectedContact = this.simulatorList[0].contacts[0];
  }

  /* Automaticamente configurar pagina en caso de cambio de resolucion */
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 1000) {
      this.onClose();
    } else {
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
  addUser() {
    this.dash = !this.dash;
    this.add = !this.add;
  }

  changeSimulator(newSim) {
    this.selectedSimulator = newSim;
  }

  changeContact(newCon){
    this.selectedContact = newCon;
  }

  //El simulador que ha sido seleccionado
  selectedSimulator: simulator = {
    name: "",
    icon: "",
    contacts: [
      {
        name: "",
        id: "",
        photoUrl: "",
        mail: "",
        phone: "",
        company: "",
        job: ""
      }
    ]
  };

  selectedContact: contact = {
    name: "",
    id: "",
    photoUrl: "",
    mail: "",
    phone: "",
    company: "",
    job: ""
  };

  // Lista de todos los datos de los simuladores
  simulatorList: simulator[] = [
    {
      name: "Seguridad",
      icon: "car",
      contacts: [
        {
          name: "Orion",
          id: "S4M0Y3D",
          photoUrl: "assets/img/testing/orion.jpg",
          mail: "orion@dreamhousedtudios.com",
          phone: "3206115544",
          company: "Dreamhouse Studios",
          job: "Vice-president"
        },
        {
          name: "Solid Snake",
          id: "???????",
          photoUrl: "assets/img/testing/snake.jpg",
          mail: "snake@foxhound.com",
          phone: "*************",
          company: "Foxhound",
          job: "Spy/Soldier"
        },
        {
          name: "Cloud Strife",
          id: "strifecloud",
          photoUrl: "assets/img/testing/cloud.jpg",
          mail: "cloud.strife@soldier.com",
          phone: "777-7777-777",
          company: "Shinra Electrical Company",
          job: "Soldier 1st class"
        },
        {
          name: "Mario",
          id: "mushroomMario",
          photoUrl: "assets/img/testing/mario.png",
          mail: "mario@mushroom.com",
          phone: "354-6357-721",
          company: "Mushroom Kingdom",
          job: "Plumber"
        },
        {
          name: "Bowser",
          id: "badBowser",
          photoUrl: "assets/img/testing/bowser.png",
          mail: "bowser@evil.com",
          phone: "666-6666-666",
          company: "Koopa Kingdom",
          job: "King"
        },
        {
          name: "Monkey D. Luffy",
          id: "pirateKingLuffy",
          photoUrl: "assets/img/testing/luffy.jpg",
          mail: "luffy@strawhats.com",
          phone: "843-7157-364",
          company: "Strawhat Pirates",
          job: "Captain"
        },
        {
          name: "Goku",
          id: "kakarotGoku",
          photoUrl: "assets/img/testing/goku.png",
          mail: "goku@capsulecorp.com",
          phone: "743-6481-782",
          company: "Capsule Corporation",
          job: "Fighter"
        }
      ]
    },
    {
      name: "Cadaveres",
      icon: "skull",
      contacts: [
        {
          name: "Luke Skywalker",
          id: "jediLuke",
          photoUrl: "assets/img/testing/luke.jpg",
          mail: "luke@jedi.com",
          phone: "354-4987-721",
          company: "Rebel Alliance",
          job: "Jedi"
        },
        {
          name: "Vlad Dracula Tepes",
          id: "vampDracula",
          photoUrl: "assets/img/testing/dracula.jpg",
          mail: "dracula@evil.com",
          phone: "666-6666-666",
          company: "Hungary hotels",
          job: "Count"
        },
        {
          name: "Dante",
          id: "pizzaDante",
          photoUrl: "assets/img/testing/dante.jpg",
          mail: "dante@dmc.com",
          phone: "666-6666-666",
          company: "Devil May Cry",
          job: "Demon Hunter"
        },
        {
          name: "Jack Sparrow",
          id: "rumJack",
          photoUrl: "assets/img/testing/jack.jpg",
          mail: "jacksparrow@pirates.com",
          phone: "743-6481-782",
          company: "Black Pearl Pirates",
          job: "Captain"
        },
        {
          name: "Bender Rodriguez",
          id: "metalBender",
          photoUrl: "assets/img/testing/bender.jpg",
          mail: "bender@planetexpress.com",
          phone: "964-6969-852",
          company: "Planet Express",
          job: "Delivery robot"
        },
        {
          name: "Homer J. Simpson",
          id: "dohHomer",
          photoUrl: "assets/img/testing/homer.jpg",
          mail: "homer@simpson.com",
          phone: "568-9842-774",
          company: "Springfield Nuclear Plant",
          job: "Security Inspector"
        }
      ]
    }
  ];

  constructor() {}
}
