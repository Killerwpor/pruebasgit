import { barData } from "./../barData";
import { doughnutData } from "../doughnutData";
import { ProgressPanelComponent } from "./../progress-panel/progress-panel.component";
import { ChartPanelComponent } from "./../chart-panel/chart-panel.component";
import { MessagePanelComponent } from "../message-panel/message-panel.component";

import { contact } from "./../contact";
import { simulator } from "./../simulator";
import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
/* 
  Nota: Dashboard es el componente principal de la pagina, contiene la 
  informacion de los simuladores, incluidos los contactos, mensajes sobre
  el simulador, graficas y progreso. Tambien se encuentra la forma para agregar
  usuarios nuevos a un simulador.
*/

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  //Declaracion de los diferentes paneles
  @ViewChild(MessagePanelComponent, { static: false })
  msgPanel: MessagePanelComponent;
  @ViewChild(ChartPanelComponent, { static: false })
  chartPanel: ChartPanelComponent;
  @ViewChild(ProgressPanelComponent, { static: false })
  progresspanel: ProgressPanelComponent;
  @ViewChild(ChartPanelComponent, { static: false })
  chartspanel: ProgressPanelComponent;

  dash: Boolean = true;
  add: Boolean = false;
  showSidebar: Boolean = true;
  screenHeight: any;
  screenWidth: any;
  //El simulador que ha sido seleccionado
  selectedSimulator: simulator;
  //El contacto que ha sido seleccionado
  selectedContact: contact;
  

  // ANCHOR colores para las graficas
  spectraGreen: string = "#40b987";
  spectraBlue: string = "rgba(0, 229, 255,1.0)";
  spectraRed: string = "rgba(255, 82, 82,1.0)";

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

    //En el panel de contacto coloca el primer contacto de la lista para llenar espacio vacio
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

  //ANCHOR cambio de simulador
  //Cambiar el simulador mostrado en el dashboard
  changeSimulator(newSim) {
    //Determinar nuevo simulador
    this.selectedSimulator = newSim;
    //Cambiar el contacto en la
    this.changeContact(this.selectedSimulator.contacts[0]);
    this.msgPanel.chosenText = this.selectedSimulator.messages[0];
    
    //Actualizar el panel de graficas
    if(this.selectedSimulator.charts.lineCharts != null){
      this.chartPanel.chosenChart = this.selectedSimulator.charts.lineCharts[0];
      this.chartPanel.toggle = "line";
    }
    if(this.selectedSimulator.charts.pieCharts != null){
      this.chartPanel.chosenChart = this.selectedSimulator.charts.pieCharts[0];
      this.chartPanel.toggle = "pie";
    }
    if(this.selectedSimulator.charts.radarCharts != null){
      this.chartPanel.chosenChart = this.selectedSimulator.charts.radarCharts[0];
      this.chartPanel.toggle = "radar";
    }
    if(this.selectedSimulator.charts.doughnutCharts != null){
      this.chartPanel.chosenChart = this.selectedSimulator.charts.doughnutCharts[0];
      this.chartPanel.toggle = "doughnut";
    }
    if(this.selectedSimulator.charts.barCharts != null){
      this.chartPanel.chosenChart = this.selectedSimulator.charts.barCharts[0];
      this.chartPanel.toggle = "bar";
    }

    this.progresspanel.chosenProgress = this.selectedSimulator.progress[0];
  }

  //Cambiar el contacto para el componente de contact panel
  changeContact(newCon) {
    this.selectedContact = newCon;
  }

  // Lista de todos los datos de los simuladores
  /* 
    La clase simulador debe de tener los siguientes parametros:
    - name: string -> el nombre del simulador
    - icon: string -> el icono que se le asocia al simulador, los diferentes tipos de iconos son puestos en los componentes
    - contacts: contact[] -> arreglo de contactos, ver archivo contact.ts para ver estructura de los contactos
    - messages: string[] -> tupla de string que son puestas en el cuadro de texto en la parte inferior del dash  
  */
  simulatorList: simulator[] = [
    {
      name: "Seguridad",
      icon: "car",
      contacts: [
        {
          name: "Orion",
          id: "GoodboiOrion",
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
      ],
      messages: [
        "Se termino un modulo de conduccion\nSe hizo la prueba de el mareo de las personas\nSe decidio hacer los carros de colores brillantes",
        "Las personas experimentan mareo al usar el simulador\nHubo un bug en una interseccion\nLos semaforos no funcionaron"
      ],
      progress: [
        //Progreso de Programacion
        {
          chartName: "Desarrollo",
          values: [[80, 20]],
          colors: [
            {
              backgroundColor: [this.spectraGreen, "rgba(0,0,0,0)"],
              borderColor: this.spectraGreen
            }
          ],
          labels: ["completo", "incompleto"]
        },

        //Progreso de Arte
        {
          chartName: "Arte",
          values: [[30, 70]],
          colors: [
            {
              backgroundColor: [this.spectraBlue, "rgba(0,0,0,0)"],
              borderColor: this.spectraBlue
            }
          ],
          labels: ["completo", "incompleto"]
        },

        //Progreso Sonido
        {
          chartName: "Sonido",
          values: [[55, 45]],
          colors: [
            {
              backgroundColor: [this.spectraRed, "rgba(0,0,0,0)"],
              borderColor: this.spectraRed
            }
          ],
          labels: ["completo", "incompleto"]
        }
      ],
      //ANCHOR charts 1
      charts: {
        barCharts: [
          {
            chartName: "Tiempo en simulador (Bar)",
            barLabels: ["< 1 minuto", "1-2 minutos", "2-5 minutos", ">5 minutos"],
            barSeries: [
              {
                data: [65, 42, 54, 12],
                label: "Grupo 1",
                backgroundColor: this.spectraGreen,
                hoverBackgroundColor: this.spectraGreen,
                borderColor: this.spectraGreen
              }
            ]
          },
          {
            chartName: "Fallas (Bar)",
            barLabels: ["Choques", "Atropellos", "Giros erroneos", "Infracciones"],
            barSeries: [
              {
                data: [150, 102, 104, 154],
                label: "Grupo 1",
                backgroundColor: this.spectraGreen,
                hoverBackgroundColor: this.spectraGreen,
                borderColor: this.spectraGreen
              },
              {
                data: [35, 65, 12, 52],
                label: "Grupo 2",
                backgroundColor: this.spectraBlue,
                hoverBackgroundColor: this.spectraBlue,
                borderColor: this.spectraBlue
              }
            ]
          }
        ],

        doughnutCharts: [
          {
            chartName: "Satisfaccion (Doughnut)",
            values: [[30, 70, 60]],
            colors: [
              {
                backgroundColor: [
                  this.spectraBlue,
                  this.spectraGreen,
                  this.spectraRed
                ],
                borderColor: [
                  this.spectraBlue,
                  this.spectraGreen,
                  this.spectraRed
                ]
              }
            ],
            labels: ["completo", "incompleto"]
          }
        ],

        radarCharts: [
          {
            chartName: "Accidentes (Radar)",
            radarChartData: [
              {
                data: [90, 100, 80, 150, 110],
                label: "Habitos",
                backgroundColor: "rgba(0, 230, 118,0.5)",
                pointBorderColor: "rgba(0, 230, 118,1.0)",
                pointBackgroundColor: "rgba(0, 230, 118,1.0)",
                borderColor: "rgba(0, 230, 118,1.0)"
              }
            ],
            radarChartLabels: [
              "Choques",
              "Infracciones",
              "Atropeyos",
              "Giros erroneos",
              "Exceso de velocidad"
            ]
          }
        ],

        pieCharts: [
          {
            chartName: "Satisfaccion (Pie)",
            pieChartValues: [40, 20, 25],
            pieChartLabels: ["Muy Satisfecho", "Satisfecho", "Neutral", "Nada Satisfecho"]
          }
        ],

        lineCharts: [
          {
            chartName: "metrica de seguridad (Line)",
            lineChartData: [
              { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
              { data: [350, 148, 240, 319, 486, 227, 190], label: "Series B" },
              {
                data: [630, 480, 770, 90, 1000, 270, 400],
                label: "Series C",
                yAxisID: "y-axis-1"
              }
            ],
            lineChartLabels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ]
          }
        ]
      }
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
      ],
      messages: [
        "Se termino el simulador\nSe hizo la prueba final\nSe cambiaron los modelos de los cadaveres por modelos mas reales",
        "Hubo un bug el dia de la demonstracion\nUna persona sufrio de mareo"
      ],

      progress: [
        //Progreso de Programacion
        {
          chartName: "Desarrollo",
          values: [[90, 10]],
          colors: [
            {
              backgroundColor: [this.spectraGreen, "rgba(0,0,0,0)"],
              borderColor: this.spectraGreen
            }
          ],
          labels: ["completo", "incompleto"]
        },

        //Progreso de Arte
        {
          chartName: "Arte",
          values: [[5, 95]],
          colors: [
            {
              backgroundColor: [this.spectraBlue, "rgba(0,0,0,0)"],
              borderColor: this.spectraBlue
            }
          ],
          labels: ["completo", "incompleto"]
        },

        //Progreso Sonido
        {
          chartName: "Sonido",
          values: [[50, 50]],
          colors: [
            {
              backgroundColor: [this.spectraRed, "rgba(0,0,0,0)"],
              borderColor: this.spectraRed
            }
          ],
          labels: ["completo", "incompleto"]
        }
      ],
      //ANCHOR charts 2
      charts: {
        barCharts: [
          {
            chartName: "Puntaje tiempo en cadaveres",
            barLabels: ["< 1 min", "1 ~ 2 minutos", "2 ~ 5 minutos", ">5 minutos"],
            barSeries: [
              {
                data: [3, 14, 24, 17],
                label: "Grupo 1",
                backgroundColor: this.spectraGreen,
                hoverBackgroundColor: this.spectraGreen,
                borderColor: this.spectraGreen
              },
              {
                data: [5, 18, 12, 33],
                label: "Grupo 2",
                backgroundColor: this.spectraBlue,
                hoverBackgroundColor: this.spectraBlue,
                borderColor: this.spectraBlue
              },
              {
                data: [8, 12, 2, 50],
                label: "Grupo 3",
                backgroundColor: this.spectraRed,
                hoverBackgroundColor: this.spectraRed,
                borderColor: this.spectraRed
              },
            ]
          },
        ],
        doughnutCharts: [
          {
            chartName: "Satisfaccion (Doughnut)",
            values: [[80, 15, 5]],
            colors: [
              {
                backgroundColor: [
                  this.spectraBlue,
                  this.spectraGreen,
                  this.spectraRed
                ],
                borderColor: [
                  this.spectraBlue,
                  this.spectraGreen,
                  this.spectraRed
                ]
              }
            ],
            labels: ["completo", "incompleto"]
          }
        ],
        radarCharts: [
          {
            chartName: "Causas de fallas (Radar)",
            radarChartData: [
              {
                data: [50, 20, 120, 45],
                label: "Habitos",
                backgroundColor: "rgba(0, 230, 118,0.5)",
                pointBorderColor: "rgba(0, 230, 118,1.0)",
                pointBackgroundColor: "rgba(0, 230, 118,1.0)",
                borderColor: "rgba(0, 230, 118,1.0)"
              }
            ],
            radarChartLabels: [
              "Mala manipulacion",
              "Tiempo",
              "Poco cuidado",
              "Procedimiento incorrecto"
            ]
          }
        ],
        pieCharts: [],
        lineCharts: [
          {
            chartName: "Metrica de cadaveres (Line)",
            lineChartData: [
              { data: [500, 541, 120, 78], label: "Avanzados" },
              { data: [350, 148, 240, 319], label: "Principiantes" },
            ],
            lineChartLabels: [
              "January",
              "February",
              "March",
              "April"
            ]
          }
        ]
      }
    }
  ];

  constructor() {}
}