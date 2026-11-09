import { Component } from '@angular/core';
import { CatalogoPage } from './pages/catalogo-page/catalogo-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoPage],
  template: `<app-catalogo-page></app-catalogo-page>`, // <-- Inyectamos la etiqueta aquí
  styles: []
})
export class AppComponent {
  title = 'catalogo-semillero';
}