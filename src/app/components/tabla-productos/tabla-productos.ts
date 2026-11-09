import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-productos.html',
  styleUrls: ['./tabla-productos.css']
})
export class TablaProductosComponent {
  productos = input.required<Producto[]>();
  rol = input.required<'admin' | 'customer'>();

  editar = output<Producto>();
  eliminar = output<Producto>();
}