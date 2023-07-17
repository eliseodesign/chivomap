'use client'
import { MapContainer } from 'react-leaflet';
import { Contribution } from './ConfigMap'
import 'leaflet/dist/leaflet.css';

export const MapView = () => {
  if(window === undefined) return <>Server</>
  return (
    <MapContainer center={{lat: 13.758960, lng:-89.653892}} zoom={9}  className='w-screen h-screen -z-10 relative'>
      


      <Contribution />
    </MapContainer>
  );
};

