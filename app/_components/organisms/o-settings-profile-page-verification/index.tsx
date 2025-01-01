/* eslint-disable jsx-a11y/label-has-associated-control */

import Toggle from '@atoms/a-toggle';
import { Button } from '@atoms/a-button';
import PlusIcon from '@/app/_lib/icons/dashboard/main/plus';
import CloudIcon from '@/app/_lib/icons/dashboard/main/cloud';
import ChainIcon from '@/app/_lib/icons/dashboard/main/chain';
import BlueStartIcon from '@/app/_lib/icons/dashboard/main/blueStart';
import PensIcon from '@/app/_lib/icons/dashboard/main/pens';

const SettingsProfileVerification = () => {
  return (
    <div className="bg-white w-full   flex flex-col space-y-3 px-4 py-5 ">
      {/* Verification Requirements */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col space-y-4 pb-4">
          <div className="flex flex-row space-x-4 items-center">
            <span className="rounded-xl h-6 w-3 bg-[#A91079]" />
            <p className="font-normal text-md">Verification Requirements</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-[80%] ">
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%] flex items-center justify-between  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <CloudIcon />
                </span>
                <p className="text-sm font-normal">Vehicle Insurance</p>
              </div>
              <div className="pr-3">
                <BlueStartIcon />
              </div>
            </div>
            <div className="flex-[50%] flex items-center  space-x-3">
              <Toggle />
              <span className="cursor-pointer">
                <PensIcon />
              </span>
            </div>
          </div>
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%]  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <ChainIcon />
                </span>
                <p className="text-sm font-normal">Road Worthiness Certificate</p>
              </div>
            </div>
            <div className="flex-[50%] flex items-center  space-x-3">
              <Toggle />
              <span className="cursor-pointer">
                <PensIcon />
              </span>
            </div>
          </div>
          <div className="flex w-full items-end   space-x-4">
            <div className="flex-[50%] flex items-center justify-between  outline-none rounded-md border border-[#C4C4C4] pl-4 py-[10px] text-[#282828] font-thin placeholder:text-[0.8rem]">
              <div className="flex items-center space-x-1">
                <span className="icon">
                  <CloudIcon />
                </span>
                <p className="text-sm font-normal">Background Check</p>
              </div>
              <div className="pr-3">
                <BlueStartIcon />
              </div>
            </div>
            <div className="flex-[50%] flex items-center  space-x-3">
              <Toggle />
              <span className="cursor-pointer">
                <PensIcon />
              </span>
            </div>
          </div>
          <div className="flex w-full items-end   ">
            <Button variant="whitebg" className=" px-6">
              <PlusIcon /> <p className="pl-1">Add New Verification Requirement</p>
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileVerification;
