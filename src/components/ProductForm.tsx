'use client'

import { useState } from 'react';
import { addRow } from '../service/appsheetService';
import { Product } from '../types/product';

const ProductForm = () => {
  const [product, setProduct] = useState<Product>({
    nombreGasto: '',
    valor: 0,
    categoria: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addRow("Productos", product);
    // Aquí podrías limpiar el formulario o dar feedback al usuario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del gasto" 
        value={product.nombreGasto} 
        onChange={(e) => setProduct({ ...product, nombreGasto: e.target.value })} 
      />
      <input 
        type="number" 
        placeholder="Valor" 
        value={product.valor} 
        onChange={(e) => setProduct({ ...product, valor: parseFloat(e.target.value) })} 
      />
      <input 
        type="text" 
        placeholder="Categoría" 
        value={product.categoria} 
        onChange={(e) => setProduct({ ...product, categoria: e.target.value })} 
      />
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default ProductForm;
