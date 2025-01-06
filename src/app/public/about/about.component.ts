import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // Array de miembros del equipo
  teamMembers = [
    {
      name: 'Roider Millares',
      role: 'Desarrollador Backend',
      image: 'assets/images/roider.jpg'  // Ruta de la imagen del miembro
    },
    {
      name: 'carlos Rivera',
      role: 'Desarrollador Frontend',
      image: 'assets/images/jonathan.jpg'  // Ruta de la imagen del miembro
    },
    {
      name: 'Rodrigo Ledezma',
      role: 'Especialista en Marketing Digital',
      image: 'assets/images/jaime.jpg'  // Ruta de la imagen del miembro
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
