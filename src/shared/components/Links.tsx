'use client'
import { INavLink } from '../interfaces/NavLink'
import { NavLink } from './NavLink'

import {
  IoCompassOutline as Map,
  IoHeartCircleOutline as Favorite,
  IoTimeOutline as History,
  IoPersonCircleOutline as Acount
} from "react-icons/io5";

const iconClass = "text-[2rem] pt-1 mb-1 block"

export const Links: INavLink[] = [
  { name: "Mapa", href: "/", icon: <Map className={iconClass} /> },
  { name: "Favorito", href: "/favorites", icon: <Favorite className={iconClass} /> },
  { name: "Historial", href: "/history", icon: <History className={iconClass} /> },
  { name: "Cuenta", href: "/account", icon: <Acount className={iconClass} /> },
]

export const LinksContainer = () => {
  return (
    <>
      {
        Links.map((link) => {
          return (
            <NavLink key={link.name} link={link} />
          )
        })
      }
    </>
  )
}