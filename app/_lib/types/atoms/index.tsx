export interface MapItems {
  path: string;
  id: string;
  name: string;
  transform: string;
  heated: boolean;
}

// eslint-disable-next-line no-unused-vars
type StringResponse = (location: MapItems, index: number) => string;
// eslint-disable-next-line no-unused-vars
type VoidResponse = (location: MapItems, index: number) => void;
type SelectedResponse = (
  // eslint-disable-next-line no-unused-vars
  location: MapItems,
  // eslint-disable-next-line no-unused-vars
  index: number,
) => boolean | 'false' | 'mixed' | 'true' | undefined;

export interface SVGMap {
  // Map properties
  map: {
    viewBox: string;
    locations: MapItems[];
    label: string;
  };
  className?: string;
  pathClass?: string;
  role?: string;

  // Locations properties
  onLocationMouseOver?: VoidResponse;
  onLocationMouseOut?: VoidResponse;
  onLocationMouseMove?: VoidResponse;
  onLocationClick?: VoidResponse;
  isLocationSelected?: SelectedResponse;
  locationClassName?: StringResponse | string;
  locationAriaLabel?: StringResponse | string;
  locationRole?: string;
}
