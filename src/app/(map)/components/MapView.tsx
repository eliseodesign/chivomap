'use client'
import dynamic from 'next/dynamic';
// import { MapContainer } from 'react-leaflet';
// import { Contribution } from './ConfigMap'
import { useMapStore } from '@/shared/store/mapStore'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';


const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});

const Contribution = dynamic(() => import('./ConfigMap').then((mod) => mod.Contribution), {
  ssr: false, // Indicar a Next.js que no renderice esto en el lado del servidor
});

export const MapView = () => {
  const { config } = useMapStore();
  console.log(config);

  const { center, zoom } = config;

  useEffect(() => {
    // Verificar si estamos en el lado del cliente antes de acceder a window
    if (typeof window !== 'undefined') {
      // Código que depende de window aquí
      // console.log(window);
    }
  }, []);

  return (
    <MapContainer center={center} zoom={zoom} className="w-screen h-screen fixed top-0 left-0">
      <Contribution />
    </MapContainer>
  );
};
