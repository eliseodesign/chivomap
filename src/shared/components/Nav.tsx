import { 
  IoCompassOutline as Map, 
  IoHeartCircleOutline as Favorite, 
  IoTimeOutline as History, 
  IoPersonCircleOutline  as Acount
} from "react-icons/io5";

const iconClass = "text-[2rem] pt-1 mb-1 block"

const Links = [
  { name: "Mapa", href:"/", icon: <Map className={iconClass}/>},
  { name: "Favorito", href:"/favorito", icon: <Favorite className={iconClass}/>},
  { name: "Historial", href:"/historial", icon: <History className={iconClass}/>},
  { name: "Cuenta", href:"/cuenta", icon: <Acount className={iconClass}/>},
]

export const Nav = () => {
  return (
    <nav className="px-7 bg-primary shadow-lg max-w-md rounded-xl">
      <div className="flex">
        {
          Links.map( (link) => {
            return (
              <div className="flex-1 group" key={link.name}>
                <a href={link.href} className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-200 group-hover:text-secondary">
                  <span className="px-1 pt-1 pb-1 flex flex-col items-center">
                    {link.icon}
                    <span className="block text-xs pb-2">{link.name}</span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-secondary rounded-full"></span>
                  </span>
                </a>
             </div>
            )
          })
        }
      </div>
    </nav>
  )
}