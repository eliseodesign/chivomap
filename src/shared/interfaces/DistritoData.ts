import { Topology, GeometryCollection } from 'topojson-specification';
import { GeoJsonProperties, BBox } from 'geojson';

export interface DistritosData extends Topology {
  objects: {
    collection: GeometryCollection<GeoJsonProperties>;
  };
  bbox?: BBox;
}
