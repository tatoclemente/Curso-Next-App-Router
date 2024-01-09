'use client'
import { titleFont } from '@/config/fonts'
import { useUiStore } from '@/store'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {

  const openSideMenu = useUiStore(state => state.openSideMenu)
  return (
    <nav className='flex px-5 py-2 justify-between items-center w-full'>
      {/** logo */}
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>

      </div>
      {/** Center Menu */}
      <div className='hidden sm:block'>

        <Link className='m-2 p-2 rounded-md hover:bg-gray-100' href='/category/men'>Hombres</Link>
        <Link className='m-2 p-2 rounded-md hover:bg-gray-100' href='/category/women'>Mujeres</Link>
        <Link className='m-2 p-2 rounded-md hover:bg-gray-100' href='/category/kid'>Niños</Link>

      </div>

      {/* Search, Cart, Menu */}
      <div className='flex items-center gap-4'>

        <Link href='/search'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>

        <Link href='/cart'>
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
          </div>
          <IoCartOutline className='w-5 h-5' />
        </Link>

        <button 
          onClick={ openSideMenu }
          className='p-2 rounded-md transition-all hover:bg-gray-100 text-sm'>MENU</button>
        

      </div>
    </nav>
  )
}
