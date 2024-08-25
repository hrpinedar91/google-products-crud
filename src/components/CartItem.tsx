'use client'

import { useCart } from '@/hooks/use-cart';
import { Button } from './ui/button';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
    ID_producto: string;
    Producto: string;
    Precio: string;
    imagen2: string;
    quantity: number;  // Añadir cantidad como propiedad
}

const CartItem = ({ ID_producto, Producto, Precio, imagen2, quantity }: CartItemProps) => {
    const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

    const handleRemove = () => {
        removeItem(ID_producto); // Eliminar el producto del carrito
    };

    const handleIncrease = () => {
        increaseQuantity(ID_producto); // Aumentar la cantidad del producto
    };

    const handleDecrease = () => {
        decreaseQuantity(ID_producto); // Reducir la cantidad del producto
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {/* Imagen del producto y nombre */}
            <td className="px-2 py-4 text-center">
                <div className='flex items-center'>
                    <Image src={imagen2} alt={Producto} width={50} height={50} className="rounded-md" />
                    <p className="font-medium text-gray-900 dark:text-white ml-3">{Producto}</p>
                </div>
            </td>

            {/* Precio unitario del producto */}
            <td className="px-2 py-4 text-center">
                <p className="text-gray-900 dark:text-white">{Precio}</p>
            </td>

            <td className="px-2 py-4 text-center">
                <p className="text-gray-900">{quantity}</p>
            </td>


            {/* Cantidad y control de la cantidad */}
            <td className="px-2 py-4">
                <div className="flex items-center space-x-2">
                    <div className='flex'>
                       
                        <div className='flex fle-col gap-2'>
                            <Button variant="outline" className='text-gray-700' size="sm" onClick={handleDecrease} disabled={quantity <= 1}>
                                -
                            </Button>

                            <Button variant="outline" className='text-gray-700' size="sm" onClick={handleIncrease}>
                                +
                            </Button>
                        </div>
                    </div>
                {/* <Button variant="destructive" size="sm" onClick={handleRemove}>
                    Eliminar
                </Button> */}
                <Trash2 className='cursor-pointer' stroke='red' onClick={handleRemove} />
                </div>
            </td>
            

        </tr>
    );
};

export default CartItem;
