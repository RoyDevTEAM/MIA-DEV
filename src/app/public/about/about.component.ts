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
        role: 'Desarrollador Backend',
        image: 'assets/images/roider.jpg'
    },
    {
        name: 'Carlos Rivera',
        role: 'Desarrollador Frontend',
        image: 'assets/images/carlos.jpg'
    },
    {
        name: 'Rodrigo Ledezma',
        role: 'Especialista en Marketing Digital',
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
        name: 'María Esther Vargas',
        role: 'Especialista en Contenido',
        image: 'assets/images/maria.jpg'
    },
    {
        name: 'Eduardo Crespo',
        role: 'Ingeniero de Software',
        image: 'assets/images/eduardo.jpg'
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
