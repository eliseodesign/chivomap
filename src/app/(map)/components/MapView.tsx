'use client'
import { MapContainer } from 'react-leaflet';
import { Contribution, initialCenter } from './ConfigMap'
import 'leaflet/dist/leaflet.css';

export const MapView = () => {
  if(window === undefined) return <>Server</>
  return (
    <MapContainer center={initialCenter} zoom={9}  className='w-screen h-screen fixed top-0 left-0'>
    

      <Contribution />
    </MapContainer>
  );
};

