'use client'
import { TileLayer } from 'react-leaflet';

/**Limite en el mapa */
export const maxBounds = [
  [14.832454558635783, -90.7462032685763], // limite top left
  [12.69081759856763, -86.78025214552537] //limite top right
]


/**(Necesario)Componente de contribucción */
export const Contribution = () => <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>