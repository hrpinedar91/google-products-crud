import { cn } from '@/lib/utils'
import React from 'react'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-xl px-4 md:px-20', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper