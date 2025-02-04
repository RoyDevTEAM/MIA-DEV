import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teamMembers = [
    {
        name: 'Roider Millares',
        role: 'Desarrollador Fullstack',
        image: 'assets/img/roy.jpg'
    }
    ,
    {
        name: 'Noelia Cuellar Chung',
        role: 'Desarrollador Fullstack',
        image: 'assets/img/noelia.jpg'
    },
    {
        name: 'Carlos Rivera',
        role: 'Marketing y Publicidad Digital',
        image: 'assets/img/carlos.jpg'
    },
    {
        name: 'Rodrigo Ledezma',
        role: 'Desarrollador Movil',
        image: 'assets/img/rodrigo.jpg'
    },
    {
        name: 'Camila Gutiérrez',
        role: 'Diseñadora Gráfica',
        image: 'assets/img/camila.jpg'
    },
    {
        name: 'Moisés Moreno',
        role: 'Analista de Datos',
        image: 'assets/img/moises.jpg'
    },
    {
        name: 'Elias Campos Justiniano',
        role: 'Desarrollador Fullstack',
        image: 'assets/images/maria.jpg'
    },
    {
        name: 'María Esther Vargas',
        role: 'Desarollo avanzado en python',
        image: 'assets/images/maria.jpg'
    },
    {
        name: 'Eduardo Crespo',
        role: 'Edicion AudioVisual',
        image: 'assets/images/eduardo.jpg'
    }
    ,
    {
        name: 'Jesica Salvatierra',
        role: 'Edicion AudioVisual',
        image: 'assets/img/jessi.jpg'
    }
    ,
    {
        name: 'Brisa Ortiz',
        role: 'Especialista en Contenido',
        image: 'assets/img/brisa.jpg'
    }
    ,
    {
        name: 'Milan Arandia',
        role: 'Edicion AudioVisual',
        image: 'assets/img/milan.jpg'
    }
    ,
    {
        name: 'Yiseel Capiona',
        role: 'Especialista en Contenido',
        image: 'assets/img/yiseel.jpg'
    }
    
];
valores = [
    { name: "Innovación", icon: "fa fa-lightbulb" },
    { name: "Compromiso", icon: "fa fa-hands-helping" },
    { name: "Trabajo en equipo", icon: "fa fa-users" },
    { name: "Transparencia", icon: "fa fa-lock" },
    { name: "Pasión", icon: "fa fa-heart" },
    { name: "Excelencia", icon: "fa fa-star" }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
