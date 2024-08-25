'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart'; // Asegúrate de ajustar la ruta de tu contexto
import { ProductType } from '@/types/product';

interface Props {
  product: ProductType;
}

const ProductItem = ({ product }: Props) => {
  const { addItem } = useCart(); // Obtener la función addItem del contexto

  const handleAddToCart = () => {
    addItem(product); // Agregar el producto al carrito
  };

  return (
    <li className="border p-4 shadow-sm rounded-lg flex flex-col pb-5 items-center justify-between bg-white">
      <Image src={product.imagen2} alt={product.Producto} width={80} height={80} className="rounded-md" />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{product.Producto}</h3>
        <p className="text-sm text-gray-600">{product.descripcion}</p>
        <p className="mt-1 text-green-700 text-2xl font-semibold">{product.moneda}{product.Precio}</p>
      </div>
      {/* Agregar al carrito */}
      <div className='w-full relative cursor-pointer' onClick={handleAddToCart}>
        <span className='bg-green-500 rounded-full w-fit p-2.5 absolute right-0 bottom-0'>
          <ShoppingCart />
        </span>
      </div>
    </li>
  );
};

export default ProductItem;
