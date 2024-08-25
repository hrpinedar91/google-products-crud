'use client'

import { useEffect, useState } from 'react'
import { BaggageClaim, ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Separator } from './ui/separator'
import { Button, buttonVariants } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import Image from 'next/image'
import Link from 'next/link'

import CartItem from './CartItem'

const Cart = () => {
  
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { items, getTotalPrice } = useCart()


  useEffect(() => {
    setIsMounted(true)
  }, [])

  const prices = items.map(product => product.Precio)



  return (
    <div className='absolute right-8 bottom-1/3'>
        <Sheet>
        <SheetTrigger className='group -m-2 flex items-center'>

            {
            items.length === 0 ? <ShoppingCart
                aria-hidden='true'
                className='h-6 w-6 mx-2.5 flex-shrink-0 text-white group-hover:text-gray-500'
            /> :
                <div className='flex gap-1'>
                <BaggageClaim strokeWidth={2} stroke='white' className='cursor-pointer h-6 w-6 mx-2.5 flex-shrink-0 text-white'></BaggageClaim>
                <span className='text-sm font-medium text-white'>               
                    {items.length}
                </span>
                </div>
            }



        </SheetTrigger>
        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
            <SheetHeader className='space-y-2.5 pr-6'>
            <SheetTitle>Carrito ({items.length})</SheetTitle>
            </SheetHeader>
            {items.length > 0 ? (
            <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-2.5">
                <table className="w-full text-sm text-left rtl:text-right text-white -mr-1 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>                   
                        <th scope="col" className="w-[200px] px-2 py-3 text-center">
                        Producto
                        </th>                    
                        <th className="px-2 py-3">
                         Valor
                        </th>
                        <th scope="col" className="px-2 py-3">
                        Cantidad
                        </th>
                        <th scope="col" className="px-2 py-3 text-center">
                            Acción
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {items.map((item: any, index: number) => (
                    
                        <CartItem key={index} {...item} id={item.id}/>
                    ))}

                    </tbody>
                </table>
                </div>




                <div className='space-y-4 pr-6'>
                <Separator />
                <div className='space-y-1.5 text-sm'>
                    <div className='flex'>
                    <span className='flex-1'>                    
                        Envío
                    </span>
                    <span className="font-bold">Gratis</span>
                    </div>
                    
                    <div className='flex'>
                    <span className='flex-1'>Total</span>
                    {/* <span className="font-bold">
                        {numberFormat(totalPrices)}
                    </span> */}
                    <span className="font-bold">
                        {getTotalPrice()}
                    </span>
                    </div>
                </div>

                <SheetFooter>
                    <SheetTrigger asChild>
                    <Link
                        className='w-full'
                        href='/carrito'
                    >
                        <Button className='w-full'>Ver carrito</Button>

                    </Link>
                    </SheetTrigger>
                </SheetFooter>
                </div>
            </>
            ) : (
            <div className='flex h-full flex-col items-center justify-center space-y-1'>
                <div
                aria-hidden='true'
                className='relative mb-4 h-60 w-60 text-muted-foreground'>
                <Image
                    src='/cart-empy.svg'
                    fill
                    sizes='100vw'
                    alt='empty shopping cart hippo'
                />
                </div>
                <div className='text-xl font-semibold'>
                Tu carrito esta vacío
                </div>
                <SheetTrigger asChild>
                <Link
                    href='/accesorios'
                    className={buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className:
                        'text-sm text-muted-foreground',
                    })}>
                    Agregue artículos a su carrito para pagar
                </Link>
                </SheetTrigger>
            </div>
            )}
        </SheetContent>
        </Sheet>

    </div>
  )
}

export default Cart