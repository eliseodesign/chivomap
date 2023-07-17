'use client'
import { LatLngExpression} from 'leaflet'
import { create } from 'zustand'

interface MapState {
  config: MapConfigOptions,
  updateConfig: (newConfig: MapConfigOptions) => void
}

interface MapConfigOptions {
  center: {lat: number, lng: number}
  zoom: number
}

export const useMapStore = create<MapState>((set) => ({
  config: {
    center: {lat: 13.758960, lng:-89.653892},
    zoom: 9
  },
  updateConfig: (newConfig) => set((state) => ({ config: newConfig })),
}))
