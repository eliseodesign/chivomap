'use client'
import React, { useEffect, useState } from 'react'
import { GeoJSON } from 'react-leaflet'
// import turf from '@turf/turf';
import { feature } from 'topojson-client' // Importa la función feature para convertir el TopoJSON a GeoJSON
import { Departamentos } from './Departamentos'
import data from '@/shared/assets/topo.json'


export function GeoDistritos() {
  const [geojsonData, setGeojsonData] = useState(null);


  console.log(data)

  useEffect(() => {
    console.log('USE EFFECT')
    if (data && data.objects && data.objects.collection) {
      console.log('INTO')
      const geojson = feature(data, data.objects.collection);
      setGeojsonData(geojson);
    }

  }, []);

  const onEachPolygon = (feature, layer) => {
    const nombre = feature.properties.M;

    // Verificar la propiedad y mostrar un popup para el polígono correspondiente

    // mouse
    layer.on({
      mouseover: () => {
        layer.openPopup();
      },
      mouseout: () => {
        layer.closePopup();
      },
    });

    layer.bindPopup(nombre);
  };

  const getPolygonStyle = (feature) => {
    const D = feature.properties.D;
    const M = feature.properties.M;
    let color = Departamentos[D] || 'transparent'


    return {
      fillColor: color, // Relleno transparente
      fillOpacity: .35, // Opacidad del relleno en 0 (transparente)
      color: color,
      weight: 1,
      dashArray: [5, 5],
    };
  };

  return (
    <>
      {geojsonData && <GeoJSON data={geojsonData} style={getPolygonStyle} onEachFeature={onEachPolygon} />}
    </>
  )
}