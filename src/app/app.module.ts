import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ServiciosComponent } from './public/servicios/servicios.component';
import { ContactoComponent } from './public/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ExtraOptions } from '@angular/router';
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Necesario si usas formularios template-driven
    ReactiveFormsModule, // Necesario para formularios reactivos
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
