import { Topology, GeometryCollection } from 'topojson-specification';
import { GeoJsonProperties } from 'geojson';

export interface DistritosData extends Topology {
  objects: {
    collection: GeometryCollection<GeoJsonProperties>;
  };
}
