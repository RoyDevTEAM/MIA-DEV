import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactoComponent } from './public/contacto/contacto.component';
import { ServiciosComponent } from './public/servicios/servicios.component';


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
