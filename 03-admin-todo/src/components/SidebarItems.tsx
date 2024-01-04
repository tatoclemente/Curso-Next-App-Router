'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

interface SidebarItemsProps {
  path: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarItems = ( { path, text, icon  }: SidebarItemsProps ) => {
  const pathname = usePathname()
  return (
    <>
      <li>
        <Link
          href={path}
          className={`
            px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
            ${ pathname === path ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
          `}
        >
         { icon }
          <span className="-mr-1 font-medium">{ text }</span>
        </Link>
      </li>
    </>
  );
};
