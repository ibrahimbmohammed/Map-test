'use client';

import { useMemo } from "react";
import { ColumnDef} from "@tanstack/react-table";
import { QuoteItem } from "@/app/_store/slices/quote-slice";
import tableImage from "@assets/png/Misc.png"
import BasicTable from "../m-table";
import IndeterminateCheckbox from "../../atoms/a-checkbox";
import { formatter } from "@/app/_lib/utils/helper";
import { quoteRequests } from "@/app/_lib/utils/mock";


function QuoteResponseTable() {

  const columns: ColumnDef<QuoteItem>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <div className="flex items-center space-x-3">
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
            <p className="text-[#475367] text-[12px] font-thin"> Items</p>
          </div>
        ),
        size: 280,
        cell: ({ row }) => (
          <div className="flex flex-row items-center space-x-3">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
            <div className="">
              <img
                src={tableImage?.src}
                alt="quote item"
                className="w-[40px] h-[40px] rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#101928] text-[14px] font-medium">
                {row.original.name}
              </p>
              <p className="text-[#475367] text-[14px] font-thin">
                {row.original.id}
              </p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "variant",
        header: "Variant",
      },
      {
        header: "Quantity",
        size: 130,
        cell: ({ row }) => (
          <span className="flex space-x-1">
            <p className="">{row.original.quantity}</p>
            <p className="">{row.original.unit}</p>
          </span>
        ),
      },
      {
        header: "Unit Price",
        cell: ({ row }) => formatter.format(row.original.unitPrice),
      },
      {
        header: "Amount",
        cell: ({ row }) =>
          formatter.format(row.original.quantity * row.original.unitPrice),
      },
      {
        accessorKey: "deliveryDate",
        header: "Delivery Date",
      },
    ],
    []
  );


  const calculateTotal = (items: { quantity: number; unitPrice: number }[]) => {
    return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  };

  return (
    <div className="rounded-lg py-6 px-8 border border-[#E4E7EC] flex flex-col">
      <div className="pb-6">
        <p className="text-[#1D2739] leading-[24px] text-[20px] font-semibold">
          Item(s)
        </p>
      </div>
      <BasicTable
        withColumn
        enableRowSelection
        data={quoteRequests?.items || []}
        columns={columns}
      />
      <div className="pt-6 flex items-center justify-end w-full">
        <div className="grid grid-cols-2 gap-y-4 gap-x-12">
          <p className="font-thin text-[16px] leading-[23.2px] text-[#475367]">
            Sub Total
          </p>
          <p className="font-thin text-[16px] leading-[23.2px] text-[#475367]">
            {formatter.format(calculateTotal(quoteRequests?.items))}
          </p>
          <p className="font-thin text-[16px] leading-[23.2px] text-[#475367]">
            Total
          </p>
          <p className="font-normal text-[16px] leading-[23.2px] text-[#475367]">
            {formatter.format(calculateTotal(quoteRequests?.items))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuoteResponseTable;
