/* eslint-disable jsx-a11y/label-has-associated-control */
import OyaLogo from '@assets/webp/logoOya.webp';
import Indian from '@assets/png/Indian.png';
import Image from 'next/image';
import LabeledInput from '@molecules/m-input-labeled';
import { IoIosArrowDown } from 'react-icons/io';

const SettingsProfile = () => {
  return (
    <div className="bg-white w-full   flex flex-col space-y-3 px-4 py-5 ">
      {/* Company Profile */}
      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#FFA187]" />
          <p className="font-normal text-md">Company Profile</p>
        </div>
        <Image alt="oya image" src={OyaLogo} width={73} height={74} />
      </div>
      <div className="flex flex-col space-y-8 w-[80%] ">
        <div className="flex w-full   space-x-4">
          <LabeledInput
            variant="form"
            label="Enter First Name"
            placeholder="Enter First Name"
            className="w-full"
            sizes="full"
            labelTextClassName="text-black text-sm font-light pb-2"
            variants="default"
          />
          <LabeledInput
            variant="form"
            label="Enter Last Name"
            placeholder=" Last Name"
            className="w-full"
            sizes="full"
            labelTextClassName="text-black text-sm font-light pb-2"
            variants="default"
          />
        </div>
        <div className="flex space-x-4 ">
          <LabeledInput
            variant="form"
            label="Enter First Name"
            placeholder="Enter First Name"
            className="w-full"
            sizes="full"
            labelTextClassName="text-black text-sm font-light pb-2"
            variants="default"
          />
          <LabeledInput
            variant="form"
            label="Enter Last Name"
            placeholder=" Last Name"
            className="w-full"
            sizes="full"
            labelTextClassName="text-black text-sm font-light pb-2"
            variants="default"
          />
        </div>
        <div className="flex space-x-4 ">
          <div className="flex flex-col w-full relative">
            <span className="text-sm font-light">Default Currency</span>
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
            <span className="text-sm font-light">Default Language</span>
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

        <div className=" line border-b w-full " />
      </div>
      {/* Admin Profile */}
      <div className="flex flex-col space-y-4 pb-4 pt-4">
        <div className="flex flex-row space-x-4 items-center">
          <span className="rounded-xl h-6 w-3 bg-[#A7A7FF]" />
          <p className="font-normal text-md">Admin Profile</p>
        </div>
        <Image alt="oya image" src={Indian} width={73} height={74} />
      </div>
    </div>
  );
};

export default SettingsProfile;
