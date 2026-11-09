import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { TarjetaProductoComponent } from '../../components/tarjeta-producto/tarjeta-producto';
import { TablaProductosComponent } from '../../components/tabla-productos/tabla-productos';

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, TarjetaProductoComponent, TablaProductosComponent],
  templateUrl: './catalogo-page.html',
  styleUrls: ['./catalogo-page.css']
})
export class CatalogoPage {
  productos = signal<Producto[]>([
    { id: 1, title: 'Audífonos Bluetooth', price: 150000, images: ['https://picsum.photos/id/1/200'], stock: 10, category: { id: 1, name: 'Electrónica' } },
    { id: 2, title: 'Smartwatch Deportivo', price: 300000, images: ['https://picsum.photos/id/20/200'], stock: 0, category: { id: 1, name: 'Electrónica' } },
    { id: 3, title: 'Chaqueta Impermeable', price: 180000, images: ['https://picsum.photos/id/1025/200'], stock: 5, category: { id: 2, name: 'Ropa' } }
  ]);

  rolActual = signal<'admin' | 'customer'>('customer');
  categoriaSeleccionada = signal<string>('TODAS');
  carrito = signal<Producto[]>([]);

  categoriasDisponibles = computed(() => {
    const nombres = this.productos().map(p => p.category.name);
    return ['TODAS', ...Array.from(new Set(nombres))];
  });

  productosFiltrados = computed(() => {
    const cat = this.categoriaSeleccionada();
    const lista = this.productos();
    if (cat === 'TODAS') return lista;
    return lista.filter(p => p.category.name === cat);
  });

  cantidadItemsCarrito = computed(() => this.carrito().length);
  totalCarrito = computed(() => this.carrito().reduce((acc, item) => acc + item.price, 0));

  alternarRol(): void {
    this.rolActual.update(rol => rol === 'customer' ? 'admin' : 'customer');
  }

  cambiarCategoria(cat: string): void {
    this.categoriaSeleccionada.set(cat);
  }

  agregarAlCarrito(producto: Producto): void {
    this.carrito.update(items => [...items, producto]);
  }

  editarProducto(producto: Producto): void {
    alert(`Editar: ${producto.title}`);
  }

  eliminarProducto(producto: Producto): void {
    this.productos.update(lista => lista.filter(p => p.id !== producto.id));
  }
}