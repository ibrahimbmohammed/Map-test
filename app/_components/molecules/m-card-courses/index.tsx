import { VideosResponse } from '@/app/_lib/types/dashboard/vedios';

interface CourseCardProps {
  item: VideosResponse['result'][0];
}

const NewCoursesCard = ({ item }: CourseCardProps) => {
  return (
    <div className="bg-[#FAF8FE]  rounded-lg px-[19px] py-[10px]  max-w-[298px] h-fit flex flex-col space-y-[24px] items-center justify-start snap-center cursor-pointer scrollbar-hide ">
      <div className="border rounded-t-2xl overflow-hidden">
        <iframe
          width="258"
          height="155"
          src={item?.videoLink ?? 'https://www.youtube.com/embed/2-OdJJ5PVp4'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="">
        <p className="text-sm text-black line-clamp-2">{item?.title}</p>
      </div>
    </div>
  );
};

export default NewCoursesCard;
