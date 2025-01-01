/* eslint-disable no-unused-vars */

'use client';

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Dispatch, SetStateAction, useState } from 'react';


const defaultStyle = {
  tableContainer: "bg-white ",
  table:
    "table-fixed  w-full text-xs  text-left text-gray-500 border rounded-2xl border-separate border-spacing-0 overflow-hidden ",
  tableHead:
    "text-[12px] text-[#091E42] bg-[#F9FAFB] max-w-[4rem] overflow-hidden",
  tableHeadCol: "px-6 py-3 text-[#475367] text-[12px] border-b font-thin",
  tableBodyRow: "bg-white font-[500] text-[#6B788E] hover:bg-gray-50",
  tableBodyCol: " px-6 py-1 ",
};


interface extraTableChildrenProps {
  filtering?: string;
  extraType?: string;
  title?: string;
  setFiltering?: Dispatch<SetStateAction<string>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  extraType?: string;
  title?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  extraTableChildren?: ({
    filtering,
    setFiltering,
  }: extraTableChildrenProps) => JSX.Element | null;
  enableRowSelection?: boolean;
  withColumn?: boolean;
  customStyles?: Partial<typeof defaultStyle> | null;
}

export default function BasicTable<TData, TValue>({
  data,
  columns,
  setIsOpen,
  extraType,
  title,
  enableRowSelection = false ,
  withColumn = false ,
  customStyles = {},
  extraTableChildren,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>('');
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      ...(enableRowSelection && { rowSelection }),
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    ...(enableRowSelection && {
      onRowSelectionChange: setRowSelection,
      enableRowSelection: true,
    }),
  });

  return (
    <div
      className={`${
        withColumn === true ? "dashboard-table " : " "
      } overflow-auto`}
    >
      <div className="w-full  ">
        {extraTableChildren &&
          extraTableChildren({
            filtering,
            setFiltering,
            setIsOpen,
            extraType,
            title,
          })}
      </div>

      <div
        className={customStyles?.tableContainer ?? defaultStyle.tableContainer}
      >
        <table className={customStyles?.table ?? defaultStyle?.table}>
          <thead className={customStyles?.tableHead ?? defaultStyle?.tableHead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    style={{
                      width: header?.column?.columnDef?.size,
                    }}
                    className={
                      customStyles?.tableHeadCol ?? defaultStyle?.tableHeadCol
                    }
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex  items-center justify-start space-x-1 cursor-pointer">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted() === "asc" && (
                          <IoIosArrowUp />
                        )}
                        {header.column.getIsSorted() === "desc" && (
                          <IoIosArrowDown />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className={withColumn === true ? "table-body" : ""}>
            {table.getRowModel().rows.map((row) => (
              <tr
                className={
                  customStyles?.tableBodyRow ?? defaultStyle?.tableBodyRow
                }
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className={
                      customStyles?.tableBodyRow ?? defaultStyle?.tableBodyCol
                    }
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data?.length > 10 && (
          <div className="flex w-full items-center justify-end py-[.9rem] space-x-6">
            <div className="flex items-center space-x-3">
              <p className="text-md font-[100]">Items per page </p>

              <div className="relative flex h-[2rem] w-full flex-col  md:w-[3.5rem] cursor-pointer">
                <select
                  value={table.getState().pagination.pageSize}
                  className=" block h-[2.6rem] w-[3.5rem] appearance-none rounded-md py-[0.5rem] pl-1  pr-[1.4rem] text-sm leading-tight border-[1.6px] border-[#A5A5A5] bg-white  text-black  focus:outline-none cursor-pointer"
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option className="" key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 top-1 left-[1.5rem]  flex items-center px-2 text-gray-700">
                  <IoIosArrowDown className="cursor-pointer text-lg text-[#FF3800] " />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <button
                className="flex items-center justify-center border-[1.6px] border-[#A5A5A5] px-[.5rem] py-[.5rem] disabled:border-gray-200 rounded-md cursor-pointer"
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
              >
                <IoIosArrowBack className="text-[#FF3800] font-[700]" />
              </button>
              <button
                className="flex items-center justify-center border-[1.6px] border-[#A5A5A5] px-[.5rem] py-[.5rem] disabled:border-gray-200  rounded-md cursor-pointer"
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
              >
                <IoIosArrowForward className="text-[#FF3800]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
