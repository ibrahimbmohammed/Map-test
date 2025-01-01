/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { ColumnDef } from '@tanstack/table-core';
import dayjs from 'dayjs';

export type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  ip_address: string;
  gender: string;
  dob: string;
};

const baseColumns: ColumnDef<Person>[] = [
  {
    size: 100,
    header: 'Name',
    accessorKey: 'name',
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    enableResizing: true,
  },
  {
    size: 150,
    header: 'Email Address',
    accessorKey: 'email',
    enableResizing: true,
  },

  {
    size: 100,
    header: 'Department',
    accessorKey: 'gender',
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Staff ID',
    accessorKey: 'gender',
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Role',
    accessorKey: 'gender',
    enableResizing: true,
  },
  {
    size: 100,
    header: 'Level',
    accessorKey: 'gender',
    enableResizing: true,
  },

  {
    size: 100,
    header: 'Employment Date',

    enableResizing: true,

    cell: ({ row }) => {
      return <div className="hell0">{dayjs(row.getValue('dob')).format('DD MM YY')}</div>;
    },
  },
  {
    size: 100,
    header: 'Salary',
    accessorKey: 'gender',
    enableResizing: true,
  },
];
export default baseColumns;
