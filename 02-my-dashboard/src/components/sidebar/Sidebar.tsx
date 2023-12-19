import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={30} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={30} />,
    title: "Counter",
    subTitle: "Contador client side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={30} />,
    title: "Pokemons",
    subTitle: "Generacion estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={30} />,
    title: "Favorites",
    subTitle: "Estado global",
  }
]

export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="user-avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Gustavo Clemente</span>
        </Link>
      </div>
      <div id="nav" className="w-full px-6">

        {menuItems.map(( item, index ) => (
          <SidebarMenuItem  key={index}{...item} />
          
        ))}
        
      </div>
    </div>
  );
};
