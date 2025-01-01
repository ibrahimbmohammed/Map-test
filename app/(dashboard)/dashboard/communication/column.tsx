/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { ColumnDef } from '@tanstack/table-core';
import dayjs from 'dayjs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BotListing } from '@/app/_lib/types/dashboard/top-performing';

const columns: ColumnDef<BotListing>[] = [
  {
    size: 2,
    header: 'ID',
    accessorFn: (row) => `${row?.uuid?.substring(0, 3)}`,
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Bots',
    accessorFn: (row) => `${row?.bot?.name}`,
    enableResizing: true,
  },

  {
    size: 200,
    header: 'Price',
    accessorFn: (row) => `${row?.price}`,
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Period',
    accessorFn: (row) => `${row?.period}`,

    enableResizing: true,
  },
  // {
  //   size: 100,
  //   header: 'Date of birth',

  //   enableResizing: true,

  //   cell: ({ row }) => {
  //     return <div className="hell0">{dayjs(row.getValue('dob')).format('DD MM YY')}</div>;
  //   },
  // },
  {
    header: 'Actions ',
    size: 50,
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className=" w-[40%] cursor-pointer">
          <BiDotsVerticalRounded className="text-lg text-[#FF3800]" />
        </div>
      );
    },
  },
];
export default columns;
