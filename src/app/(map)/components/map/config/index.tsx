'use client'
import { LatLngBoundsExpression } from 'leaflet';
import { TileLayer } from 'react-leaflet';

/**Limite en el mapa */

/**(Necesario)Componente de contribucción */
export const Contribution = () => <TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

export * from "./GeoDistritos"