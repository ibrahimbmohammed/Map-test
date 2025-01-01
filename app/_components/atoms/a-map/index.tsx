import type { FC } from 'react';
import { SVGMap } from '@/app/_lib/types/atoms';
import { mapExtras } from '@/app/_lib/utils/map';

const MapChart: FC<SVGMap> = ({
  map: { label, locations, viewBox },
  isLocationSelected,
  onLocationMouseOver,
  onLocationMouseOut,
  onLocationMouseMove,
  onLocationClick,
  locationClassName,
  locationAriaLabel,
  className,
  pathClass,
}) => {
  const getCenter = (id: string) => {
    let transform = '';

    if (mapExtras[id as keyof typeof mapExtras]) {
      transform = mapExtras[id as keyof typeof mapExtras].transform;
    }

    return (
      <text
        style={{ fill: '#000080', fontSize: 9, textTransform: 'capitalize' }}
        transform={transform}
      >
        {id}
      </text>
    );
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      aria-label={label}
      style={{ overflow: 'visible', height: '270px' }}
    >
      {locations.map((location, index) => {
        return (
          <g
            id={location.name}
            key={location.id}
            className={
              typeof locationClassName === 'function'
                ? locationClassName(location, index)
                : locationClassName
            }
          >
            <path
              id={location.id}
              name={location.name}
              d={location.path}
              aria-label={
                typeof locationAriaLabel === 'function'
                  ? locationAriaLabel(location, index)
                  : location.name
              }
              aria-checked={isLocationSelected && isLocationSelected(location, index)}
              onMouseOver={() => onLocationMouseOver && onLocationMouseOver(location, index)}
              onMouseOut={() => onLocationMouseOut && onLocationMouseOut(location, index)}
              onMouseMove={() => onLocationMouseMove && onLocationMouseMove(location, index)}
              onClick={() => onLocationClick && onLocationClick(location, index)}
              className={`${pathClass} ${location.heated ? 'fill-[#FFBFA7]' : ''}`}
            />

            {getCenter(location.id)}
          </g>
        );
      })}
    </svg>
  );
};

export default MapChart;
