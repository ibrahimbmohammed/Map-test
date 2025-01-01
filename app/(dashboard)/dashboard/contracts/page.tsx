'use client';

import { useMemo, useState } from 'react';
import BasicTable from '@/app/_components/molecules/m-table';
import { mockedData } from '@/app/_components/molecules/m-table/mock';
import columns from './column';
import { Button } from '@/app/_components/atoms/a-button';
import FormModal from '@/app/_lib/hoc/form-modal';
import FormFrame from '@/app/_lib/hoc/form';
import LabeledInput from '@/app/_components/molecules/m-input-labeled';
import ExtraTableChildren from '@/app/_components/molecules/m-extra-table-children';

export default function Home() {
  const data = useMemo(() => mockedData, []);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <main className="pt-[2rem] ">
        <BasicTable
          data={data}
          columns={columns}
          title="User Management"
          setIsOpen={setIsOpen}
          extraType="headerWithBtn"
          extraTableChildren={ExtraTableChildren}
        />
      </main>
      <FormModal title="Create Department" isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormFrame>
          <div className="w-full  flex  flex-col items-start space-y-5">
            <div className="w-full  flex flex-col space-y-4">
              <LabeledInput
                variant="form"
                label="Department Name"
                placeholder="e.g Engineering, Marketing"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
              <LabeledInput
                variant="form"
                label="Head of Department"
                placeholder="e.g Devon Lane"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
              <LabeledInput
                variant="form"
                label="Status"
                placeholder="e.g Active"
                className=""
                sizes="full"
                labelTextClassName="text-black text-sm font-light pb-2"
                variants="default"
              />
            </div>
            <div className="w-full flex items-center justify-center pb-4">
              <Button variant="primary" size="xfull" type="submit">
                Create Department
              </Button>
            </div>
          </div>
        </FormFrame>
      </FormModal>
    </>
  );
}
