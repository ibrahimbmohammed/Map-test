'use client';

import { useMemo, useState } from 'react';
import BasicTable from '@/app/_components/molecules/m-table';
import { mockedData } from '@/app/_components/molecules/m-table/mock';
import columns from './column';
import { Button } from '@/app/_components/atoms/a-button';
import FormModal from '@/app/_lib/hoc/form-modal';
import FormFrame from '@/app/_lib/hoc/form';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import PenIcon from '@/app/_lib/icons/dashboard/main/pen';
import ExtraTableChildren from '@/app/_components/molecules/m-extra-table-children';

export default function Home() {
  const data = useMemo(() => mockedData, []);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <main className="">
        <BasicTable
          data={data}
          columns={columns}
          setIsOpen={setIsOpen}
          extraTableChildren={ExtraTableChildren}
        />
      </main>
      <FormModal title="Add New Rider" isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormFrame>
          <div className="w-full  flex  flex-col items-start space-y-5">
            <div className="w-full items-center justify-center">
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center py-[1rem]">
                  <div className="relative w-[8rem] h-[8rem] rounded-full bg-[#CDCDCD] cursor-pointer">
                    <span className="absolute bottom-[3px]  drop-shadow-xl shadow-lg right-4 flex items-center justify-center bg-white p-[6px] rounded-full">
                      <PenIcon />
                    </span>
                  </div>
                  <p className="font-thin">Use only .jpg .png .jpeg</p>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col space-y-4">
              <LabeledInput
                variant="form"
                label="Enter First Name"
                placeholder="Enter First Name"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
              <LabeledInput
                variant="form"
                label="Enter Last Name"
                placeholder=" Last Name"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
              <LabeledInput
                variant="form"
                label="Enter Email Address"
                placeholder=" Email Address"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
              <LabeledInput
                variant="form"
                label="Enter Phone Number"
                placeholder="Phone Number"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
            </div>
            <div className="w-full flex items-center justify-center pb-4">
              <Button variant="primary" size="lg" type="submit">
                Add User
              </Button>
            </div>
          </div>
        </FormFrame>
      </FormModal>
    </>
  );
}
