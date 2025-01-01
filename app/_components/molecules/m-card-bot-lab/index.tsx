import TextInCardInfo from '../m-text-bot-lab';
import { BotlabResponse } from '@/app/_lib/types/dashboard/bot-lab';

interface PriceCardProps {
  item: BotlabResponse['result'][0];
  number: number;
}
const BotLabCard = ({ item, number = 0 }: PriceCardProps) => {
  return (
    <div className="shadow-[0px_4px_25px_rgba(2,24,20,0.25)] bg-white w-[300px] sm:w-[470px] lg:w-[470px] box-border">
      <div className="bg-[rgba(93,23,235,1)] flex justify-center items-stretch flex-col h-[43px] box-border px-[21px] w-[70%] lg:w-[50%]">
        <p className="text-xs font-light tracking-[0.48px] text-white grow-0 shrink-0 basis-auto">
          NOT LISTED (Currently on test)
        </p>
      </div>
      <div className="flex justify-start items-stretch flex-col mt-[47px] px-[28.5px]">
        <p className="text-base font-bold tracking-[0.64px] text-orange-400 grow-0 shrink-0 basis-auto">
          Bot {number + 1}
        </p>
        <p className="text-2xl font-bold text-[rgba(64,72,79,1)] grow-0 shrink-0 basis-auto mt-[7px]">
          {item?.name}
        </p>
        <div className="flex justify-center items-stretch flex-col gap-5 grow-0 shrink-0 basis-auto mt-[7.25px] pl-[4.25px] pr-[11.5px] pt-[37px] pb-[54px] border-0 border-[rgba(64,72,79,1)] border-solid">
          <TextInCardInfo title=" Name of Broker:" body={item?.nameOfBroker} />
          <TextInCardInfo title="Server Name:" body={item?.serverName} />
          <TextInCardInfo title="Investor Login:" body={item?.investorLogin} />
          <TextInCardInfo title="Investor Password:" body={item?.investorPassword} />
          <TextInCardInfo title="Terminal:" body={item?.terminal} />
          <TextInCardInfo title="Test Start Date:" body={item?.testCommencementDate} />

          <div className="card-actions ">
            <button className="btn btn-sm  border-0 px-4 h-[2.58rem]  bg-[#5D17EB] ">
              <p className="font-normal text-xs group-hover:text-[#5D17EB] text-[#FFFFFF] ">Info</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotLabCard;
