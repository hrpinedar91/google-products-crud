export interface ProductType {
  ID_producto: string;
  Producto: string;
  Precio: string;
  Medida: string;
  Stock: string;
  imagen2: string;
  descripcion: string;
  categoria: string;
  moneda: string;
  formato: string;
  Favoritos?: string;
  imagen: string;
  RelatedPedidosDetalles?: string; // Renombrado para cumplir con las convenciones
}

  
  export interface ApiResponse<T> {
    result: T;
    status: string;
    error?: string;
  }
  