/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { ColumnDef } from '@tanstack/table-core';
import dayjs from 'dayjs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Person } from '@/app/_components/molecules/m-table/mock';

const columns: ColumnDef<Person>[] = [
  {
    size: 2,
    header: 'ID',
    accessorKey: 'id',
    enableResizing: true,
  },
  {
    size: 100,
    header: 'First Name',
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    enableResizing: true,
  },

  {
    size: 200,
    header: 'Email',
    accessorKey: 'email',
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Gender',
    accessorKey: 'gender',

    enableResizing: true,
  },
  {
    size: 100,
    header: 'Date of birth',

    enableResizing: true,

    cell: ({ row }) => {
      return <div className="hell0">{dayjs(row.getValue('dob')).format('DD MM YY')}</div>;
    },
  },
  {
    header: ' ',
    size: 50,
    enableResizing: true,
    cell: ({ row }) => {
      return (
        <div className=" w-[40%] cursor-pointer">
          <BiDotsHorizontalRounded className="text-lg text-[#6B788E]" />
        </div>
      );
    },
  },
];
export default columns;
