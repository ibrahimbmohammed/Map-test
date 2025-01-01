/* eslint-disable jsx-a11y/alt-text */
import { BsDot } from 'react-icons/bs';
import dayjs from 'dayjs';
// import Image from 'next/image';
import { ApiResponseForWebinar } from '@/app/_lib/types/dashboard/webinar';

interface WebinarCardProps {
  item: ApiResponseForWebinar['result'][0];
}

const WebinarCard = ({ item }: WebinarCardProps) => {
  return (
    <div className="flex w-[298px] flex-col">
      <div className="shadow-[4px_8px_10px_0px_rgba(0,0,0,0.05)] bg-white self-stretch flex w-full grow flex-col pb-6 rounded-lg">
        <img
          loading="lazy"
          alt="webinar"
          src={item?.image}
          width="200px"
          height="150px"
          className="aspect-[1.30] object-cover object-center w-full shadow-[4px_8px_10px_0px_rgba(0,0,0,0.05)] overflow-hidden self-stretch rounded-lg"
        />
        <div className="items-start  flex  max-w-full flex-col mt-10 px-5">
          <div className="text-slate-900 text-[1.1rem] font-semibold line-clamp-1">
            {item?.name}
          </div>
          <div className="items-start flex w-[152px] max-w-full gap-0 mt-0.5">
            <div className="text-zinc-400 text-sm self-stretch ">
              {dayjs(item?.date).format('DD, MM YY')}
            </div>
            <div className="flex items-center justify-center pt-[1px]">
              <BsDot />
            </div>

            <div className="text-zinc-400 text-sm self-stretch ">
              <ul>
                <li>
                  {dayjs(item?.time).format('hh:mm A') === 'Invalid Date'
                    ? '6:00PM'
                    : dayjs(item?.time).format('hh:mm A')}{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-slate-900 text-sm mt-0.5">{item?.location}</div>
        </div>
        {/* <div className="items-start flex w-[101px] max-w-full gap-1.5 ml-5 mt-7 px-5 max-md:ml-2.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea0491e5-1606-40fd-bd73-ccd153d7fd07?apiKey=78d3d1db18ff493abeb06e613aff3679&"
            className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
          />
          <div className="text-slate-900 text-xs opacity-60">4.1k followers</div>
        </div> */}
      </div>
    </div>
  );
};

export default WebinarCard;
