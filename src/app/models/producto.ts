export interface Categoria {
  id: number;
  name: string;
}

export interface Producto {
  id: number;
  title: string;
  price: number;
  images: string[];
  stock: number;
  category: Categoria;
}