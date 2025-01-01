import HomeIcon from '@/app/_lib/icons/dashboard/home';
import LeftArrowIcon from '@/app/_lib/icons/dashboard/left-arrow';

const HomeInfoComp = () => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="flex items-center lg:hidden xl:flex  space-x-1">
        <HomeIcon />
        <LeftArrowIcon />
      </span>
      <span className="flex-col space-y-3 lg:pt-6 xl:pt-0 ">
        <p className="">Dashboard</p>
        <p className="">Start Copying the Bot you Love! 🚀</p>
      </span>
    </div>
  );
};

export default HomeInfoComp;
