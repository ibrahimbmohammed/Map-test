import { Dispatch, SetStateAction } from 'react';
import { Button } from '@atoms/a-button';
import TableFilterIcon from '@/app/_lib/icons/dashboard/table-filter';

interface ExtraTableChildrenProps {
  filtering?: string;
  extraType?: string;
  title?: string;
  setFiltering?: Dispatch<SetStateAction<string>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ExtraTableChildren = ({
  filtering,
  setFiltering,
  setIsOpen,
  title = '',
  extraType = 'search',
}: ExtraTableChildrenProps) => {
  // Conditionally render different JSX based on the extraType
  if (extraType === 'header') {
    return (
      <div className="flex items-center justify-between p-1 rounded-t-2xl bg-white px-[2rem]">
        <div className="w-[40%] pb-[0.2rem] pt-[1rem]">
          <p className="text-xl text-black font-[600]">{title}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="table" size="sm">
            <TableFilterIcon />
          </Button>
        </div>
      </div>
    );
  }
  if (extraType === 'headerWithBtn') {
    return (
      <div className="flex flex-col w-full ">
        <div className="flex items-start justify-between pb-[2rem]">
          <div className="w-[40%] pb-[0.2rem] pt-[1rem]">
            <p className="text-xl text-black font-[600]">{title}</p>
          </div>
          <div className="flex space-x-0">
            <Button onClick={() => setIsOpen && setIsOpen(true)} variant="primary" size="lg">
              Add New Role
            </Button>
          </div>
        </div>
        <div className="w-full bg-white h-[0.9rem] rounded-t-2xl " />
      </div>
    );
  }
  if (extraType === 'search') {
    return (
      <div className="flex flex-col w-full">
        <div className="flex items-start justify-between  px-[2rem]">
          <div className="w-[40%] pb-[1rem]">
            <input
              type="text"
              value={filtering}
              placeholder="Search..."
              onChange={(e) => setFiltering && setFiltering(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full px-[0.7rem] py-[0.9rem] "
            />
          </div>
          <div className="flex space-x-2">
            <Button onClick={() => setIsOpen && setIsOpen(true)} variant="primary" size="lg">
              Add New Role
            </Button>
          </div>
        </div>
        <div className="w-full bg-white h-[0.9rem] rounded-t-2xl " />
      </div>
    );
  }
  // Default case or any additional conditions
  return null; // You can also return a default JSX or null if no match is found
};

export default ExtraTableChildren;
