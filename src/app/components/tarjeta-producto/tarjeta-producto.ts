import { Component, input, output } from '@angular/core';
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
  producto = input.required<Producto>();
  rol = input.required<'admin' | 'customer'>();

  agregarCarrito = output<Producto>();
  editar = output<Producto>();
  eliminar = output<Producto>();

  onAgregar() {
    this.agregarCarrito.emit(this.producto());
  }

  onEditar() {
    this.editar.emit(this.producto());
  }

  onEliminar() {
    this.eliminar.emit(this.producto());
  }
}