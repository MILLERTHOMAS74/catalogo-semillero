export interface Producto {
  id: number;
  title: string;
  price: number;
  images: string[];
  stock: number;
  category: {
    id: number;
    name: string;
  };
}