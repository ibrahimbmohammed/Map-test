/* eslint-disable no-unused-vars */
import { BotDescriptionResponse } from '@/app/_lib/types/dashboard/copybots';

interface BotCardProps {
  item: BotDescriptionResponse['result'][0];
  handleSetDoc: (doc: string, name: string) => void;
}

const BotCard = ({ item, handleSetDoc }: BotCardProps) => {
  return (
    <div className="card rounded-[8px] shadow-md h-[15.31rem] min-w-[14.7rem] group hover:bg-[#5D17EB] bg-[#FAF8FE] text-primary-content">
      <div className="py-5 px-5 flex flex-col space-y-6">
        <h3 className="card-title group-hover:text-white text-black line-clamp-1">
          {item?.bot?.name}
        </h3>
        <div className="flex flex-col space-y-1">
          <p className="text-[#FB923C] font-light text-[12px]">Click to View myFxbook</p>
          <p className="group-hover:text-white text-[#5D17EB] font-semibold">
            Min:- {item?.bot?.minInvestmentAmount} and above
          </p>
          <span className="flex items-center justify-start relative">
            <p className="font-light group-hover:text-white text-[#AAAAAA] text-xs">Overall:</p>
            <p className="absolute font-semibold text-xs left-[25%] group-hover:text-white text-black">
              {item?.bot?.overall}
            </p>
          </span>
          <span className="flex justify-start relative">
            <p className="font-light group-hover:text-white text-[#AAAAAA] text-xs  w-fit mx-0">
              Performance Fee:
            </p>
            <p className="font-semibold text-xs absolute left-[50%] group-hover:text-white text-black">
              {item?.bot?.performanceFee}
            </p>
          </span>
        </div>

        <div className="card-actions ">
          <button
            onClick={() => handleSetDoc(item?.description, item?.bot?.name)}
            className="btn btn-sm  border-0 px-4 h-[2.58rem]  bg-[#5D17EB] group-hover:bg-[#FAF8FE] group-hover:opacity-100 opacity-20"
          >
            <p className="font-normal text-xs group-hover:text-[#5D17EB] text-[#FFFFFF] ">
              Start Copying
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
