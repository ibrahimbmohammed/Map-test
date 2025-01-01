import ChatIcon from '@/app/_lib/icons/dashboard/main/chat';

const ComplaintsCart = () => {
  return (
    <div className="bg-white rounded-xl flex flex-col space-y-3  border border-[#D1D1D1] px-4 py-5 ">
      <div className="flex items-center justify-between">
        <p className="text-md font-bold">Refund not initiated</p>
        <p className="text-md font-bold">June 12</p>
      </div>
      <div className="">
        <p className="font-thin text-sm">
          Lorem ipsum dolor sit amet consectetur. Suscipit mauris venenatis odio vestibulum
          tincidunt sed. Tristique pulvinar vestibulum iaculis ut pellentesque nunc urna posuere.
        </p>
      </div>
      <div className="flex items-center justify-start space-x-2">
        <span className="border rounded-xl px-2 py-[0.3px]">
          <p className="font-thin text-lg">#TN24</p>
        </span>
        <span className="flex items-center justify-center space-x-1">
          <ChatIcon />
          <p className="font-thin ">2</p>
        </span>
      </div>
    </div>
  );
};

export default ComplaintsCart;
