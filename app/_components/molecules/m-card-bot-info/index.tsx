import InnerHTML from '../../atoms/a-inner-html';

interface BotInfoCardProps {
  info: string;
  name: string;
}

const BotInfoCard = ({ info, name }: BotInfoCardProps) => {
  return (
    <div className="bg-white w-full flex flex-col px-[2rem]">
      <div className="justify-center items-start self-stretch flex w-full flex-col max-md:max-w-full">
        <div className="bg-orange-400 self-stretch flex min-h-[10px] w-full flex-col rounded-lg border-2 border-solid border-gray-200 max-md:max-w-full" />
        <div className="bg-purple-50   flex w-full flex-col mt-2.5 items-start justify-start pt-2 pb-4  rounded-lg border-2 border-solid border-gray-200 max-md:max-w-full">
          <div className="items-start flex w-[386px] max-w-full flex-col ml-1 max-md:ml-2.5">
            <div className="text-slate-900 text-2xl font-semibold ">Start copying 🚀</div>
            <p className="text-slate-900 text-xs lg:text-base font-semibold mt-3 line-clamp-1 ">
              To Copy {name}:
            </p>
          </div>
        </div>
      </div>
      <div className="text-violet-700 text-sm leading-6 self-center max-w-[837px] mt-10 mb-3 max-md:max-w-full">
        {/* set prose for link tags */}
        <InnerHTML htmlStyle="prose:text-black prose-a:text-blue-500" content={info ?? ''} />
      </div>
    </div>
  );
};

export default BotInfoCard;
