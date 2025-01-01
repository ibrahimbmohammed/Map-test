import Nigeria from '@svg-maps/nigeria';
import Map from '@atoms/a-map';
import { heatedStates } from '@/app/_lib/utils/map';

const HeatMap = () => {
  const redefined = { ...Nigeria };

  redefined.locations = redefined.locations.map((item) => {
    const heated = heatedStates.includes(item.id);
    if (heatedStates.includes(item.id)) {
      return { ...item, heated };
    }
    return item;
  });

  return (
    <div className="flex flex-col space-y-5 xl:w-[26.875rem] lg:w-[22.875rem] lg:h-[14.1rem] h-[19.1rem] xl:h-[19.1rem] 2xl:w-[34rem] 2xl:h-[23rem] p-5 border rounded-xl group bg-white shadow-md">
      <p className="font-[500] text-xl">Heat Map </p>
      <div className="flex-grow px-5 justify-center flex">
        <Map
          map={redefined}
          className="fill-[#F3F3FF] stroke-[0.2px] stroke-[#000080]"
          pathClass=" hover:fill-[#000080]"
        />
      </div>
    </div>
  );
};

export default HeatMap;
