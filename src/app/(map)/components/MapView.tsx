'use client'
import { MapContainer } from 'react-leaflet';
import { Contribution } from './ConfigMap'
import { useMapStore } from '@/shared/store/mapStore'
import 'leaflet/dist/leaflet.css';

export const MapView = () => {

  const { config } = useMapStore()
  console.log(config)

  const { center, zoom } = config

  if(window === undefined) return <>Server</>
  return (
    <MapContainer center={center} zoom={zoom}  className='w-screen h-screen fixed top-0 left-0' 
    key={`${center.lat}-${center.lng}-${zoom}`}
    >
  
      <Contribution />
    </MapContainer>
  );
};

