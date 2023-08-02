import React, { useState, useEffect } from 'react';
import { GeoJSON } from 'react-leaflet';
import data from '@/shared/assets/topo.json';
import { merge } from 'topojson-client'; // Importamos la función merge
import { Departamentos } from './Departamentos';

export function GeoDepartamentos() {
  const [deptos, setDeptos] = useState(null);

  useEffect(() => {
    // Array para almacenar los polígonos de los departamentos
    const polygons = [];

    // Obtener las claves (nombres de departamento) de Departamentos
    const departamentosKeys = Object.keys(Departamentos);

    // Recorrer cada nombre de departamento
    departamentosKeys.forEach((departamento) => {
      // Filtrar las geometrías que corresponden al departamento actual
      const geometries = data.objects.collection.geometries.filter(
        (el) => el.properties.D === departamento
      );

      // Crea un nuevo objeto TopoJSON solo con las geometrías del departamento actual
      const filteredTopoJSON = {
        type: 'Topology',
        objects: {
          collection: {
            type: 'GeometryCollection',
            geometries,
          },
        },
      };

      // Unificar las geometrías para formar el polígono merge del departamento actual
      const mergedPolygon = merge(data, filteredTopoJSON.objects.collection.geometries);

      // Agregar el polígono merge al array de polygons
      polygons.push(mergedPolygon);
    });

    // Actualizar el estado con los polígonos de los departamentos
    setDeptos(polygons);
  }, []);

  // Estilo para los polígonos (línea negra)
  const polygonStyle = {
    fillColor: 'transparent',
    fillOpacity: 0,
    color: 'black', // Color de la línea del polígono
    weight: 2, // Grosor de la línea del polígono
  };

  return (
    <>
      {deptos &&
        deptos.map((geojson, index) => (
          <GeoJSON key={index} data={geojson} style={polygonStyle} />
        ))}
    </>
  );
}
