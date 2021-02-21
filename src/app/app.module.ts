import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AulaComponent } from './aula/aula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EbookComponent } from './ebook/ebook.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SliderComponent } from './slider/slider.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    AulaComponent,
    ContactoComponent,
    EbookComponent,
    EquipoComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    NoticiasComponent,
    SliderComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
