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
        image: 'assets/img/roy.jpg',
        facebook: '',
        linkedin:'',
        github:''

    }
    ,
    {
        name: 'Noelia Cuellar Chung',
        role: 'Desarrollador Fullstack',
        image: 'assets/img/noelia.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Carlos Rivera',
        role: 'Marketing y Publicidad Digital',
        image: 'assets/img/carlos.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Rodrigo Ledezma',
        role: 'Desarrollador Movil',
        image: 'assets/img/rodrigo.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Camila Gutiérrez',
        role: 'Diseñadora Gráfica',
        image: 'assets/img/camila.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Moisés Moreno',
        role: 'Analista de Datos',
        image: 'assets/img/moises.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Elias Campos Justiniano',
        role: 'Desarrollador Fullstack',
        image: 'assets/images/maria.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'María Esther Vargas',
        role: 'Desarollo avanzado en python',
        image: 'assets/images/maria.jpg',
        facebook: '',
        linkedin:'',
        github:''
    },
    {
        name: 'Eduardo Crespo',
        role: 'Edicion AudioVisual',
        image: 'assets/images/eduardo.jpg',
        facebook: '',
        linkedin:'',
        github:''
    }
    ,
    {
        name: 'Jesica Salvatierra',
        role: 'Edicion AudioVisual',
        image: 'assets/img/jessi.jpg',
        facebook: '',
        linkedin:'',
        github:''
    }
    ,
    {
        name: 'Brisa Ortiz',
        role: 'Especialista en Contenido',
        image: 'assets/img/brisa.jpg',
        facebook: '',
        linkedin:'',
        github:''
    }
    ,
    {
        name: 'Milan Arandia',
        role: 'Edicion AudioVisual',
        image: 'assets/img/milan.jpg',
        facebook: '',
        linkedin:'',
        github:''
    }
    ,
    {
        name: 'Yiseel Capiona',
        role: 'Especialista en Contenido',
        image: 'assets/img/yiseel.jpg',
        facebook: '',
        linkedin:'',
        github:''
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
  team= [
    { name: "Juan Pérez", role: "Full Stack Developer", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Ana Gómez", role: "Frontend Developer", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Carlos Rojas", role: "Backend Developer", img: "https://i.pravatar.cc/150?img=3" },
    { name: "Lucía Méndez", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?img=4" },
    { name: "Pedro Sánchez", role: "DevOps Engineer", img: "https://i.pravatar.cc/150?img=5" },
    { name: "María López", role: "Data Scientist", img: "https://i.pravatar.cc/150?img=6" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
