import ProductList from '@/components/ProductList'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-50'>
     
      <MaxWidthWrapper>
        <ProductList category="ABARROTES" /> {/* Pasamos la categoría */}
      </MaxWidthWrapper>
    </div>
  )
}

export default page