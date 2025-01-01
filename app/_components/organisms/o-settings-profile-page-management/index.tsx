/* eslint-disable jsx-a11y/label-has-associated-control */

import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../atoms/a-button';

const SettingsProfileManagement = () => {
  return (
    <div className="bg-white w-full   flex flex-col space-y-3 px-4 py-5 ">
      {/* Matching  Distance Range Setting */}
      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#FFCC00]" />
          <p className="font-normal text-md">Matching Distance Range Setting</p>
        </div>
      </div>
      <div className="flex flex-col space-y-8 w-[80%] ">
        <div className="flex space-x-4 ">
          <div className="flex flex-col w-full relative">
            <span className="text-sm font-light">Minimum Proximity</span>
            <select className=" outline-none appearance-none  rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 top-[22px] right-0  flex items-center px-2 text-gray-700">
              <IoIosArrowDown className="cursor-pointer text-lg text-[#FF3800] " />
            </div>
          </div>
          <div className="flex flex-col w-full relative">
            <span className="text-sm font-light">Maximum Proximity</span>
            <select className=" outline-none appearance-none  rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 top-[22px] right-0  flex items-center px-2 text-gray-700">
              <IoIosArrowDown className="cursor-pointer text-lg text-[#FF3800] " />
            </div>
          </div>
        </div>

        <div className="">
          <Button variant="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileManagement;
