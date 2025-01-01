'use client';

import { useMemo } from "react";
import {
  ColumnDef,
} from "@tanstack/react-table";
import { deleteQuoteItem, QuoteItem, updateQuoteItem } from "@/app/_store/slices/quote-slice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks/redux-hooks";
import BasicTable from "../m-table";
import GrayTrashIcon from "@/app/_lib/icons/dashboard/main/gray-trash";
import GrayDollarIcon from "@/app/_lib/icons/dashboard/main/gray-dollar";
import EmptyCalenderIcon from "@/app/_lib/icons/dashboard/main/empty-calender";
import DownTopIcon from "@/app/_lib/icons/dashboard/down-top";
import { formatter } from "@/app/_lib/utils/helper";

const customStyle = {
  tableContainer: "",
  table:
    "table-fixed  w-full text-xs  text-left text-gray-500  rounded-2xl border-separate border-spacing-0 overflow-hidden ",
  tableHead:
    "text-[12px] text-[#091E42] bg-[#F9FAFB] pb-8  font-[600] max-w-[4rem] overflow-hidden",
  tableHeadCol: "px-6 py-2 text-[#475367] text-[12px] font-thin",
  tableBodyRow: "bg-white py-[6px] font-[500] text-[#6B788E] hover:bg-gray-50",
  tableBodyCol: " px-6 py-1 ",
};

function QuoteResponseEditableTable() {
  const dispatch = useAppDispatch();
  const quote = useAppSelector((state) => state.quoteData.currentQuote);


  const handleCalendarClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const dateInput = e.currentTarget.nextElementSibling;
    if (dateInput && (dateInput as HTMLInputElement).showPicker) {
      (dateInput as HTMLInputElement).showPicker();
    } else {
      if (dateInput) {
        (dateInput as HTMLInputElement).click();
      }
    }
  };

  const handleFieldUpdate = (
    id: string,
    field: keyof QuoteItem,
    value: any
  ) => {
    if (!quote) return;
    dispatch(
      updateQuoteItem({
        quoteId: quote.id,
        itemId: id,
        field,
        value,
      })
    );
  };

  const handleDeleteRow = (id: string) => {
    if (!quote) return;
    dispatch(
      deleteQuoteItem({
        quoteId: quote.id,
        itemId: id,
      })
    );
  };

  const columns: ColumnDef<QuoteItem>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Items",
        size: 220,
        cell: ({ row }) => (
          <div className="relative ">
            <span className="absolute top-[14px] right-[26px] z-50">
              <DownTopIcon />
            </span>
            <select
              className="pl-3 styled-select border h-[2.25rem] w-[12.5rem] 2xl:w-[15.2rem] 2xl:h-[2.25rem] outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD] bg-[#F0F2F5]"
              value={row.original.name || ""}
              disabled
              onChange={(e) =>
                handleFieldUpdate(row.original.id, "name", e.target.value)
              }
            >
              <option value={row.original.name}>{row.original.name}</option>
            </select>
          </div>
        ),
      },
      {
        accessorKey: "variant",
        header: "Variant",
        size: 150,
        cell: ({ row }) => (
          <div className="relative">
            <span className="absolute top-[14px] right-[28px]">
              <DownTopIcon />
            </span>
            <select
              className="border pl-3 h-[2.25rem] w-[8rem] 2xl:w-[10.2rem] outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]"
              value={row.getValue("variant") || ""}
              onChange={(e) =>
                handleFieldUpdate(row.original.id, "variant", e.target.value)
              }
            >
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
            </select>
          </div>
        ),
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        cell: ({ row }) => (
          <div className="relative">
            <span className="absolute right-[28px] top-[6px] bg-[#F7F9FC] rounded-[4px] py-1 px-2">
              <p className="text-[12px] text-[#667185] font-thin">Pack</p>
            </span>
            <input
              type="number"
              min="0"
              className="border pl-2 h-[2.25rem] w-[8rem] 2xl:w-[10.2rem] outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]"
              value={row.getValue("quantity")}
              onChange={(e) =>
                handleFieldUpdate(
                  row.original.id,
                  "quantity",
                  Math.max(0, Number(e.target.value))
                )
              }
            />
          </div>
        ),
      },
      {
        accessorKey: "Price",
        header: "Price",
        cell: ({ row }) => (
          <div className="relative">
            <span className="absolute top-[7px] left-2">
              <GrayDollarIcon />
            </span>
            <input
              type="number"
              min="0"
              className="border pl-8 h-[2.25rem] w-[8rem] 2xl:w-[10.2rem] outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]"
              value={row.original.unitPrice}
              onChange={(e) =>
                handleFieldUpdate(
                  row.original.id,
                  "unitPrice",
                  Math.max(0, Number(e.target.value))
                )
              }
            />
          </div>
        ),
      },
      {
        accessorKey: "deliveryDate",
        header: "Expected delivery..",
        cell: ({ row }) => (
          <div className="relative ">
            <span
              onClick={handleCalendarClick}
              className="absolute top-2 left-[8px]"
            >
              <EmptyCalenderIcon />
            </span>
            <input
              type="date"
              min="0"
              className="border pl-8 h-[2.25rem] w-[8rem] 2xl:w-[10.2rem] outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]"
              value={row.original.deliveryDate}
              onChange={(e) =>
                handleFieldUpdate(
                  row.original.id,
                  "unitPrice",
                  Math.max(0, Number(e.target.value))
                )
              }
            />
          </div>
        ),
      },
      {
        id: "amount",
        header: "Amount",
        cell: ({ row }) => (
          <p className="text-[#344054] text-[14px] font-normal">
            {formatter.format(row.original.quantity * row.original.unitPrice)}
          </p>
        ),
      },
      {
        id: "delete",
        cell: ({ row }) => (
          <button
            className="2xl:w-[2.2rem]"
            onClick={() => handleDeleteRow(row.original.id)}
          >
            <GrayTrashIcon />
          </button>
        ),
      },
    ],
    []
  );

  return (
    <div className="">
      <BasicTable
        data={quote?.items || []}
        columns={columns}
        customStyles={customStyle}
      />
    </div>
  );
}

export default QuoteResponseEditableTable;
