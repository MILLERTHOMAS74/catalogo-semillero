import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-producto.html',
  styleUrls: ['./tarjeta-producto.css']
})
export class TarjetaProductoComponent {
  @Input({ required: true }) producto!: Producto;
  @Output() agregarAlCarrito = new EventEmitter<Producto>();

  onAgregar(): void {
    if (this.producto.stock > 0) {
      this.agregarAlCarrito.emit(this.producto);
    }
  }
}