import React from 'react';
import { GeoJSON } from 'react-leaflet';
import data from '@/shared/assets/topo.json';
import { merge } from 'topojson-client';

export function GeoPais() {
  // Unificar los polígonos para formar el polígono más grande
  const filtrados = data.objects.collection.geometries.filter( el => el.properties.NAM !== 'Zona En Proceso De Demarcación')
  const mergedPolygon = merge(data, filtrados);

  // Estilo para el polígono unificado (con relleno transparente y borde)
  const mergedPolygonStyle = {
    fillColor: 'transparent',
    fillOpacity: 0,
    color: 'blue', // Color del borde del polígono unificado
    weight: 3, // Grosor del borde del polígono unificado
  };

  return (
    <>
      {mergedPolygon && <GeoJSON data={mergedPolygon} style={mergedPolygonStyle} />}
    </>
  );
}
