import { Topology, GeometryCollection } from 'topojson-specification';
import { GeoJsonProperties } from 'geojson';

interface FeatureGeometry {
  type: string;
  arcs: number[][][];
}

interface Feature {
  type: string;
  properties: { NAM: string; D: string; M: string };
  geometry: FeatureGeometry;
}

export interface DistritosData extends Topology {
  objects: {
    collection: GeometryCollection<GeoJsonProperties & { geometries: Feature[] }>;
  };
}
