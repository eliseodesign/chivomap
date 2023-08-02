'use client'
import dynamic from 'next/dynamic';
import { useMapStore } from '@/shared/store/mapStore'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});
const GeoDepartamentos = dynamic(() => import('./config').then((mod) => mod.GeoDepartamentos), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});
const GeoDistritos = dynamic(() => import('./config').then((mod) => mod.GeoDistritos), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});
const GeoPais = dynamic(() => import('./config').then((mod) => mod.GeoPais), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});
const Contribution = dynamic(() => import('./config').then((mod) => mod.Contribution), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});

export const MapView = () => {
  const { config } = useMapStore();
  console.log(config);

  const { center, zoom } = config;



  return (
    <MapContainer
      // data={municipiosJson}
      center={center}
      zoom={zoom}
      className="w-screen h-screen fixed top-0 left-0"
      maxBounds={[
        [17.838768214469866, -91.00994252677712], // limite top left
        [11.214449814812207, -85.6233130419287] //limite top right
      ]}
      maxBoundsViscosity={1.0}
      minZoom={8}
    >
      <GeoDepartamentos/>
      <GeoDistritos />
      <GeoPais />
      <Contribution />
    </MapContainer>
  );
};
