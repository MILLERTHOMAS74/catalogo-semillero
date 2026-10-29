import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input({ required: true }) productos!: Producto[];
  @Output() editar = new EventEmitter<Producto>();
  @Output() eliminar = new EventEmitter<Producto>();

  trackByProductoId(index: number, producto: Producto): number {
    return producto.id;
  }
}