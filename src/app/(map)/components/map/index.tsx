'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMapStore } from '@/shared/store/mapStore';
import 'leaflet/dist/leaflet.css';
import placeholderMap from './config/placeholderMap.webp'

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const Contribution = dynamic(() => import('./config').then((mod) => mod.Contribution), {
  ssr: false,
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

export const MapView = () => {
  const [mapReady, setMapReady] = useState(false);

  const { config } = useMapStore();
  const { center, zoom } = config;

  const handleMapLoad = () => {
    setTimeout(() => {
      setMapReady(true);
    }, 1000)
  };


  return (
    <>
      {mapReady ? null
        : 
        <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <span className='text-center text-gray-300 text-2xl font-bold'>Cargando...</span>
        </div>
          <Image 
            className='top-0 left-0 w-screen h-screen filter brightness-[0.25] blur-md z-50' 
            src={placeholderMap} 
            alt='map' 
            height={200} width={500} />
        </>}
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-screen h-screen fixed top-0 left-0"
        maxBounds={[
          [17.838768214469866, -91.00994252677712], // limite top left
          [11.214449814812207, -85.6233130419287], //limite top right
        ]}
        maxBoundsViscosity={1.0}
        minZoom={8}
        whenReady={handleMapLoad}
      >
        <Contribution />
        {/* Renderizar los componentes cuando estén listos */}
        {mapReady && (
          <>
            <GeoDepartamentos />
            <GeoDistritos />
            <GeoPais />
          </>
        )}
      </MapContainer>
    </>

  );
};
