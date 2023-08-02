'use client'
import React, { useEffect, useState} from 'react'
import { GeoJSON } from 'react-leaflet'
// import turf from '@turf/turf';
import { feature } from 'topojson-client' // Importa la función feature para convertir el TopoJSON a GeoJSON
import { DistritosData  } from '@/shared/interfaces/DistritoData';
import data from '@/shared/assets/topo.json'


export function GeoDistritos() {
  const [geojsonData, setGeojsonData] = useState<any>(null);

  const topo = data as DistritosData

  useEffect(() => {
  
    if (topo && topo.objects && topo.objects.layername) {
      // Convierte el TopoJSON a GeoJSON utilizando la función feature
      const geojson = feature(topo, topo.objects.layername);
      setGeojsonData(geojson);
    }
  }, [topo]);
  
  

  const getPolygonStyle = (feature:any) => {
    const D = feature.properties.D;
    const M = feature.properties.M;
    let color = 'black';
    console.log(D,M)

    switch (D) {
      case 'AHUACHAPÁN':
        color = '#279e31'; // Verde
        break;
      case 'SONSONATE':
        color = '#8fc932'; // Verde claro
        break;
      case 'SANTA ANA':
        color = '#ec3838'; // Rojo
        break;
      case 'CHALATENANGO':
        color = '#914553'; // Marrón
        break;
      case 'SAN SALVADOR':
        color = '#ff661f'; // Naranja
        break;
      case 'SAN VICENTE':
        color = '#e7dc3a'; // Amarillo
        break;
      case 'USULUTÁN':
        color = '#3cbeb4'; // Turquesa
        break;
      case 'LA LIBERTAD':
        color = '#2f5ab6'; // Azul
        break;
      case 'CUSCATLÁN':
        color = '#ff5dff'; // Violeta
        break;
      case 'LA PAZ':
        color = '#9b2b95'; // Púrpura
        break;
      case 'CABAÑAS':
        color = '#b62f51'; // Rojo oscuro
        break;
      case 'MORAZÁN':
        color = '#0f5c3e'; // Verde oscuro
        break;
      case 'LA UNIÓN':
        color = '#5a5a55'; // Gris oscuro
        break;
      case 'SAN MIGUEL':
        color = '#14b64a'
        break;
      default:
        color = '#000'; // Color por defecto para departamentos no listados
        break;
    }


    return {
      fillColor: 'transparent', // Relleno transparente
      fillOpacity: 0, // Opacidad del relleno en 0 (transparente)
      color: color,
      weight: 2,
      dashArray: [5, 5],
    };
  };

  return (
    <>
    {geojsonData && <GeoJSON data={geojsonData} style={getPolygonStyle} />}
    </>
  )
}