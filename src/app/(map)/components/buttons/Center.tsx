'use client'
import { useMapStore } from '@/shared/store/mapStore'

export const BtnCenter = () => {
  const { updateConfig, config} = useMapStore()

  const handleClick = () => {
    updateConfig({center: {lat: config.center.lat + 0.000001, lng: config.center.lng+0.000001}, zoom:config.zoom})
  }
  return (
    <button onClick={handleClick} className='text-3xl font-bold fixed top-0 right-0'>CENTER</button>
  )
}
