import Image from 'next/image';
import DefaultAvatar from '@assets/png/Indian.png';

const RecentActivityCard = () => {
  return (
    <div className="ml-3 inline-flex items-center px-[1rem] py-[0.35rem]">
      <span className="flex items-center justify-center space-x-2">
        <Image
          src={DefaultAvatar.src}
          alt=""
          width={50}
          height={50}
          className="rounded-full object-cover mt-[0px]"
        />
      </span>
      <div className="flex flex-col space-y-1">
        <span className="flex space-x-1">
          <p className="text-sm font-thin whitespace-nowrap">Guilherme responded:</p>
          <p className="text-sm font-bold"> Refund </p>
        </span>
        <span className="flex justify-between">
          <p className="text-sm font-bold">not initiated</p>
          <p className="text-sm font-thin">30 mins ago</p>
        </span>
      </div>
    </div>
  );
};

export default RecentActivityCard;
