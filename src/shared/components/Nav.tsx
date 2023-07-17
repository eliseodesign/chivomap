'use client'
import { 
  IoCompassOutline as Map, 
  IoHeartCircleOutline as Favorite, 
  IoTimeOutline as History, 
  IoPersonCircleOutline  as Acount
} from "react-icons/io5";

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const iconClass = "text-[2rem] pt-1 mb-1 block"

import { INavLink } from '../interfaces/NavLink'
import { NavLink } from "./NavLink";

const Links: INavLink[] = [
  { name: "Mapa", href:"/", icon: <Map className={iconClass}/>},
  { name: "Favorito", href:"/favorites", icon: <Favorite className={iconClass}/>},
  { name: "Historial", href:"/history", icon: <History className={iconClass}/>},
  { name: "Cuenta", href:"/account", icon: <Acount className={iconClass}/>},
]

export const Nav = () => {
  const path = usePathname()
  return (
    <nav className="px-7 bg-primary shadow-lg max-w-md rounded-xl z-30">
      <div className="flex">
        {
          Links.map( (link) => {
            return (
              <NavLink key={link.name} link={link}/>
            )
          })
        }
      </div>
    </nav>
  )
}