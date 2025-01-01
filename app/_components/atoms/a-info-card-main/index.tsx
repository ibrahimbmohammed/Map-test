interface InforCardMainProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const InforCardMain = ({ title, value, icon, color }: InforCardMainProps) => {
  return (
    <div className="flex items-center justify-between    lg:min-h-[4.875rem] lg:w-[8.5rem] xl:w-[12.5rem] 1xl:min-h-[7.875rem] 1xl:w-[15.5rem] 2xl:min-h-[7.875rem] 2xl:w-[20rem] lg:px-[1rem] lg:py-[1rem] xl:px-[1rem] xl:py-[1rem] px-[2rem] py-[2rem] 1xl:px-[2rem] 1lx:py-[2rem]  rounded-xl group bg-white ">
      <span
        style={{ borderColor: 'transparent' }}
        className="rounded-full border relative  px-[0.6rem] py-[0.5rem] overflow-hidden"
      >
        <span
          style={{ backgroundColor: color, opacity: 0.1 }}
          className="h-full w-full absolute top-0 left-0 text-transparent"
        >
          .
        </span>
        {icon}
      </span>
      <span className="flex flex-col lg:pl-[1rem] space-y-4   w-full  items-start justify-between ">
        <span className="flex w-full items-center justify-between lg:space-x-2">
          <p className="font-light text-[#091E42]  lg:text-xs  xl:text-xs 1xl:text-[16px]">
            {title}
          </p>
        </span>
        <span className="flex w-full items-center justify-between lg:space-x-2">
          <p className="font-[400] text-black  lg:text-xs xl:text-xs 1xl:text-4xl">{value}</p>
        </span>
      </span>
    </div>
  );
};

export default InforCardMain;
