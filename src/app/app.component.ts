import { Component } from '@angular/core';
import { CatalogoPageComponent } from './pages/catalogo-page/catalogo-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoPageComponent],
  template: `<app-catalogo-page></app-catalogo-page>`
})
export class AppComponent {}