import { EbookComponent } from './ebook/ebook.component';
import { AulaComponent } from './aula/aula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent} from './inicio/inicio.component';
import { EquipoComponent} from './equipo/equipo.component';
import { NosotrosComponent} from './nosotros/nosotros.component';
import { NoticiasComponent} from './noticias/noticias.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';



const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'aula', component: AulaComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'ebook', component: EbookComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
