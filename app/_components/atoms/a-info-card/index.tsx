interface InforCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const InforCard = ({ title, value, icon, color }: InforCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-2 xl:space-y-5 lg:min-h-[4.875rem] lg:w-[8.5rem] xl:w-[12.5rem] 1xl:min-h-[7.875rem] 1xl:w-[15.5rem] 2xl:min-h-[7.875rem] 2xl:w-[20rem] lg:px-[1rem] lg:py-[1rem] xl:px-[1rem] xl:py-[1rem] px-[2rem] py-[2rem] 1xl:px-[2rem] 1lx:py-[2rem]  rounded-xl  bg-white ">
      <span className="flex w-full items-center justify-between lg:space-x-2">
        <p className="font-light text-[#6B788E] lg:text-xs  xl:text-xs 1xl:text-[15px]">{title}</p>
        <span
          style={{ borderColor: color }}
          className="rounded-full border relative  px-[0.5rem] py-[0.5rem] overflow-hidden"
        >
          <span
            style={{ backgroundColor: color, opacity: 0.1 }}
            className="h-full w-full absolute top-0 left-0 text-transparent"
          >
            .
          </span>
          {icon}
        </span>
      </span>
      <span className="flex  w-full  items-center justify-between lg:space-x-2">
        <p className="font-[900] text-black  lg:text-xs xl:text-xs 1xl:text-lg">{value}</p>
      </span>
    </div>
  );
};

export default InforCard;
