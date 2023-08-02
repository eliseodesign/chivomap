import { Topology, GeometryCollection  } from 'topojson-specification';

export interface DistritosData extends Topology {
  objects: {
    layername: GeometryCollection<{}>;
  };
}