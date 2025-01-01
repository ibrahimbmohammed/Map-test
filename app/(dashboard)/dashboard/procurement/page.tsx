/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-lone-blocks */

'use client';

import dayjs from 'dayjs';
import { useMemo } from 'react';

import DownArrowMainIcon from '@/app/_lib/icons/dashboard/main/down-arrow';
import BasicTable from '@/app/_components/molecules/m-table';
import baseColumns from '../_base-column/column';
import { mockedData2 } from '../_base-column/mock';
import PeopleIcon from '@/app/_lib/icons/dashboard/sidebar/People';
import ExtraTableChildren from '@/app/_components/molecules/m-extra-table-children';
import InforCard from '@/app/_components/atoms/a-info-card';

export default function Home() {
  const now = dayjs();
  const data = useMemo(() => mockedData2, []);
  return (
    <main className="flex flex-col space-y-5 mt-[2rem] ">
      <div className="flex items-center justify-between w-full">
        <p className="text-black">Overview</p>
        <div className="">
          <span className="flex items-center  space-x-1 justify-center px-[1rem] py-[0.4rem] bg-white rounded-2xl">
            <p className="text-sm text-black font-light">{now.format('MMMM DD')}</p>
            <DownArrowMainIcon />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full justify-between">
        <InforCard
          color="#9747FF"
          icon={<PeopleIcon className="py-[1px] text-[#9747FF]" />}
          title="Approved leave request"
          value="2"
        />
        <InforCard
          color="#25FC7B"
          icon={<PeopleIcon className="text-[#25FC7B]" />}
          title="Employees on leave"
          value="5"
        />
        <InforCard
          color="#E21E1E"
          icon={<PeopleIcon className="my-[1px]" />}
          title="Pending leave approvals"
          value="5"
        />
        <InforCard
          color="#E21E1E"
          icon={<PeopleIcon />}
          title="Rejected leave request"
          value="10"
        />
      </div>

      <div className="">
        <BasicTable
          extraType="header"
          title="Leave Application"
          data={data}
          columns={baseColumns}
          extraTableChildren={ExtraTableChildren}
        />
      </div>
    </main>
  );
}
