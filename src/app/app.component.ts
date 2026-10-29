import { Component } from '@angular/core';
import { CatalogoPage } from './pages/catalogo-page/catalogo-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogo-semillero';
}