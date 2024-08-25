'use client';

import { useEffect, useState } from 'react';
import { findRows, deleteRow } from '../service/appsheetService';
import { Product } from '../types/product';
import ProductItem from './ProductItem'; // El componente de item de producto

interface ProductListProps {
  category?: string;  // La categoría es ahora opcional
}

const ProductList = ({ category }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await findRows('Productos');

      // Si la categoría está definida, filtramos, si no, traemos todos los productos
      const filteredProducts = category
        ? data.filter((product: Product) => product.categoria === category)
        : data;
        
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [category]);  // Vuelve a ejecutar el efecto cuando la categoría cambia

  const handleDelete = async (productKey: string) => {
    await deleteRow('Productos', productKey);
    setProducts(products.filter((product) => product.ID_producto !== productKey));
  };

  return (
    <div>
      {/* <h2>{category ? `${category} - ` : ''}Lista de Productos</h2> */}
      <ul className='grid grid-cols-6 gap-4 pt-12'>
        {products.map((product: any, index: any) => (
          <ProductItem product={product} key={index}/>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
