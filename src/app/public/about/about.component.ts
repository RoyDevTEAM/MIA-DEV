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
        image: 'assets/images/roider.jpg'
    }
    ,
    {
        name: 'Noelia Cuellar Chung',
        role: 'Desarrollador Fullstack',
        image: 'assets/images/carlos.jpg'
    },
    {
        name: 'Carlos Rivera',
        role: 'Marketing y Publicidad Digital',
        image: 'assets/images/carlos.jpg'
    },
    {
        name: 'Rodrigo Ledezma',
        role: 'Desarrollador Movil',
        image: 'assets/images/rodrigo.jpg'
    },
    {
        name: 'Camila Gutiérrez',
        role: 'Diseñadora Gráfica',
        image: 'assets/images/camila.jpg'
    },
    {
        name: 'Moisés Moreno',
        role: 'Analista de Datos',
        image: 'assets/images/moises.jpg'
    },
    {
        name: 'Elias Campos Justiniano',
        role: 'Desarrollador Fullstack',
        image: 'assets/images/maria.jpg'
    },
    {
        name: 'María Esther Vargas',
        role: 'Especialista en Contenido',
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
        image: 'assets/images/eduardo.jpg'
    }
    ,
    {
        name: 'Brisa Ortiz',
        role: 'Especialista en Contenido',
        image: 'assets/images/eduardo.jpg'
    }
    ,
    {
        name: 'Milan Arandia',
        role: 'Edicion AudioVisual',
        image: 'assets/images/eduardo.jpg'
    }
    ,
    {
        name: 'Yiseel Capiona',
        role: 'Especialista en Contenido',
        image: 'assets/images/eduardo.jpg'
    }
    
];

  constructor() { }

  ngOnInit(): void {
  }

}
