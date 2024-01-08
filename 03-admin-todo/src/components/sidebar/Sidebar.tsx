
import Link from 'next/link'
import Image from 'next/image'
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import { LogoutButton, SidebarItems } from '..';



const menuItems = [
  {
    icon: <IoCalendarOutline size={30} />,
    text: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline size={30} />,
    text: 'Rest TODOS',
    path: '/dashboard/todos/rest-todos'
  },
  {
    icon: <IoListOutline size={30} />,
    text: 'Server Actions',
    path: '/dashboard/todos/server-todos'
  },
  {
    icon: <IoCodeWorkingOutline size={30} />,
    text: 'Cookies',
    path: '/dashboard/products/cookies'
  },
  {
    icon: <IoBasketOutline size={30} />,
    text: 'Products',
    path: '/dashboard/products'
  },
  {
    icon: <IoPersonOutline size={30} />,
    text: 'Profile',
    path: '/dashboard/profile'
  }
]


export const Sidebar = async() => {

  const sesion = await getServerSession(authOptions)
  const userName = sesion?.user?.name ?? 'No name'
  const avatarUrl = sesion?.user?.image ? sesion?.user?.image : "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
  const userRol = sesion?.user?.roles ?? ['client']
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">
              <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" width={100} height={100} className='w-32' alt="tailus logo"/>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image src={avatarUrl} alt="" width={150} height={150} className="m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
              <span className="hidden text-gray-400 lg:block capitalize">{ userRol.join(', ') }</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((items, index) => (
              <SidebarItems key={index} { ...items } />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogoutButton />
        </div>
      </aside>
  )
}
