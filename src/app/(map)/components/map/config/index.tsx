'use client'
import { LatLngBoundsExpression } from 'leaflet';
import { TileLayer } from 'react-leaflet';

/**Limite en el mapa */

/**(Necesario)Componente de contribucción */
export const Contribution = () => <TileLayer
attribution='&copy; <a href="https://carto.com/">Carto</a> contributors'
url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
/>

export * from "./GeoDepartamentos"
export * from "./GeoDistritos"
export * from "./GeoPais"