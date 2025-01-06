import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Array de testimonios
  testimonials = [
    {
      name: 'Juan Pérez',
      role: 'CEO de Innovatech',
      comment:
        'MIADEV transformó por completo nuestra presencia en línea. Su equipo de expertos es simplemente increíble.',
      image: 'assets/clients/juan.jpg',
    },
    {
      name: 'María García',
      role: 'Fundadora de EcoGreen',
      comment:
        'Gracias a MIADEV, nuestras ventas en línea se triplicaron en menos de 6 meses. Su dedicación es inigualable.',
      image: 'assets/clients/maria.jpg',
    },
    {
      name: 'Carlos López',
      role: 'Director de Marketing en TechZone',
      comment:
        'El diseño y desarrollo que hicieron para nuestra web fue impecable. Estamos muy satisfechos.',
      image: 'assets/clients/carlos.jpg',
    },
  ];
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario Enviado:', this.contactForm.value);
      alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
      this.contactForm.reset();
    } else {
      alert('Por favor, completa correctamente todos los campos.');
    }
  }
  // Array de preguntas frecuentes
  faqs = [
    {
      question: '¿Qué servicios ofrece MIADEV?',
      answer: 'Ofrecemos desarrollo web, marketing digital, SEO, branding, y mucho más.',
      isOpen: false,
    },
    {
      question: '¿Cómo puedo contactar a MIADEV?',
      answer: 'Puedes llamarnos al 69295703 o enviarnos un mensaje a través de nuestra página de contacto.',
      isOpen: false,
    },
    {
      question: '¿Cuál es el tiempo estimado para desarrollar un proyecto?',
      answer: 'Depende de la complejidad del proyecto. Generalmente, los tiempos oscilan entre 2 semanas y 3 meses.',
      isOpen: false,
    },
    {
      question: '¿MIADEV ofrece soporte técnico?',
      answer: 'Sí, ofrecemos planes de soporte técnico y mantenimiento para asegurar que tu plataforma funcione perfectamente.',
      isOpen: false,
    },
  ];
  currentIndex = 0;

  // Función para avanzar al siguiente testimonio
  nextTestimonial(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }

  // Función para retroceder al testimonio anterior
  prevTestimonial(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
  // Función para alternar el estado de una pregunta
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
