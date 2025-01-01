/* eslint-disable jsx-a11y/alt-text */

import { VideosResponse } from '@/app/_lib/types/dashboard/vedios';

interface CourseCardProps {
  item: VideosResponse['result'];
}

const LargeCoursesCard = ({ item }: CourseCardProps) => {
  return (
    <div className=" flex items-start  flex-col lg:items-start ">
      <div className="text-slate-900 text-xl">Live Now</div>
      <div className="hidden lg:flex rounded-2xl overflow-hidden">
        <iframe
          width="558"
          height="355"
          src={item?.[0].videoLink ?? 'https://www.youtube.com/embed/2-OdJJ5PVp4'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="w-full border lg:hidden flex self-center  rounded-2xl overflow-hidden">
        <iframe
          width="340"
          height="195"
          src={item?.[0].videoLink ?? 'https://www.youtube.com/embed/2-OdJJ5PVp4'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LargeCoursesCard;
