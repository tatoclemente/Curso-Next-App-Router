'use client'

import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget
            title={count.toString()}
            subtitle='Productos en carrito de compras'
            icon={<IoCartOutline size={50} className="text-blue-500"  />}
            label='Contador'
            href='/dashboard/counter'
        />
        {/* <SimpleWidget /> */}
      </div>
  )
}
