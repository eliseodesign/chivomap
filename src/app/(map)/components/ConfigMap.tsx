'use client'
import { LatLngBoundsExpression } from 'leaflet';
import { TileLayer } from 'react-leaflet';

/**Limite en el mapa */
export const maxBounds: LatLngBoundsExpression | undefined = [
  [17.838768214469866, -91.00994252677712], // limite top left
  [11.214449814812207, -85.6233130419287] //limite top right
]

/**(Necesario)Componente de contribucción */
export const Contribution = () => <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>