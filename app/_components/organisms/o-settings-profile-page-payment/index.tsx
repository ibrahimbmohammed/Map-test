/* eslint-disable jsx-a11y/label-has-associated-control */

import LabeledInput from '@molecules/m-input-labeled';
import { IoIosArrowDown } from 'react-icons/io';
import Toggle from '@atoms/a-toggle';
import Image from 'next/image';
import FlutterWave from '@assets/png/flutterwave.png';
import Paystack from '@assets/png/paystack.png';
import { Button } from '@atoms/a-button';
import CardIcon from '@/app/_lib/icons/dashboard/main/card';
import PlusIcon from '@/app/_lib/icons/dashboard/main/plus';

const SettingsProfilePayment = () => {
  return (
    <div className="bg-white w-full   flex flex-col space-y-3 px-4 py-5 ">
      {/* Payment Methods */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col space-y-4 pb-4">
          <div className="flex flex-row space-x-4 items-center">
            <span className="rounded-xl h-6 w-3 bg-[#FF8B00]" />
            <p className="font-normal text-md">Payment Methods</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-[80%] ">
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%]  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <CardIcon />
                </span>
                <p className="text-sm font-thin">Debit/Credit card</p>
              </div>
            </div>
            <div className="flex-[50%] flex items-center ">
              <Toggle />
            </div>
          </div>
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%]  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <Image alt="image" src={FlutterWave} width={23} height={23} />
                </span>
                <p className="text-sm font-thin">Flutterwave</p>
              </div>
            </div>
            <div className="flex-[50%] flex items-center ">
              <Toggle />
            </div>
          </div>
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%]  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <Image alt="image" src={Paystack} width={23} height={23} />
                </span>
                <p className="text-sm font-thin">Paystack</p>
              </div>
            </div>
            <div className="flex-[50%] flex items-center ">
              <Toggle />
            </div>
          </div>
          <div className="flex w-full items-end   ">
            <Button variant="whitebg" className=" px-6">
              <PlusIcon /> <p className="pl-1">Add New Payment Method</p>
            </Button>
          </div>
          <div className=" line border-b w-full " />
        </div>
      </div>

      {/* Ride Fare */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col space-y-4 pb-4 pt-4">
          <div className="flex flex-row space-x-4 items-center">
            <span className="rounded-xl h-6 w-3 bg-[#8E0A0A]" />
            <p className="font-normal text-md">Ride Fare</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-[80%] ">
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
        </div>

        <div className="mt-4">
          <Button variant="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfilePayment;
