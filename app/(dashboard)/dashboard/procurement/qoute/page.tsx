/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-lone-blocks */

"use client";

import dayjs from "dayjs";
import { useMemo } from "react";
import { Button } from "@/app/_components/atoms/a-button";
import { mockedData2 } from "../../_base-column/mock";
import CanCleIcon from "@/app/_lib/icons/dashboard/main/cancel";
import BuildingIcon from "@/app/_lib/icons/dashboard/main/building";
import DottenIcon from "@/app/_lib/icons/dashboard/dotted";
import NoeFileIcon from "@/app/_lib/icons/dashboard/main/neo-file";
import DownTopIcon from "@/app/_lib/icons/dashboard/down-top";
import QuoteResponseTable from "@/app/_components/molecules/m-qoute-table";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks/redux-hooks";
import { updateQuote } from "@/app/_store/slices/quote-slice";
import { quoteRequests } from "@/app/_lib/utils/mock";

export default function QoutePage() {
  const now = dayjs();
  const data = useMemo(() => mockedData2, []);
  const router = useRouter();

  const dispatch = useAppDispatch();
  // const quote = useAppSelector((state) => state.quoteData.currentQuote);
  const handleContinue = () => {
    router.push("/dashboard/procurement/qoute/qoute-response");
    dispatch(updateQuote(quoteRequests));
  };

  return (
    <main className="flex flex-col mt-[2rem] ">
      <div className="flex items-center justify-between w-full ">
        <div className="">
          <p className="text-black text-2xl font-semibold">Quote details</p>
          <p className=" text-[14px] font-thin text-[#667185]">
            Created on Wed, 12th June 2022, 08:00am
          </p>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Button
            onClick={() => handleContinue()}
            type="button"
            variant="primary2"
            size="xfull"
          >
            <span className="font-normal text-xs text-[#FFFFFF]">Respond</span>
          </Button>
          <Button
            type="button"
            variant="primary2"
            size="xfull"
            className="bg-[#D42620]"
          >
            <div className="flex items-center justify-between space-x-3">
              <CanCleIcon />
              <span className="font-normal text-xs text-[#FFFFFF]">Reject</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="rounded-lg py-6 px-8 border border-[#E4E7EC] mt-8">
        <div className="flex items-center justify-between pb-[1.5rem]">
          <p className="font-semibold text-[20px] text-[#1D2739]">
            Quote Information
          </p>
          <p className="font-thin text-[14px] text-[#667185]">
            Expected delivery date : 2024-12-02
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="grid grid-cols-2 gap-3">
            {/*      Title           */}
            <p className="text-[1rem] text-[#555E68] font-thin ">Title</p>
            <p className="text-[#344054] font-light">Request for Equipments</p>
            {/*      RFQ           */}
            <p className="text-[1rem] text-[#555E68] font-thin">RFQ No</p>
            <p className="text-[#344054] font-light text-[1rem]">RQ #01234</p>
            {/*      Requestor           */}
            <p className="text-[1rem] text-[#555E68] font-thin">Requestor</p>
            <span className="flex items-center justify-between space-x-1">
              <span className="rounded-full w-8 h-8 bg-[#FFECE5] flex items-center justify-center">
                <p className="text-xs text-[#101928]">JD</p>
              </span>
              <p className="text-[#344054] font-light">Jane Doe</p>
              <p className="">
                <DottenIcon />
              </p>
              <p className="text-[#98A2B3] font-light">
                Head Nurse, Paediatrics
              </p>
            </span>
            {/*      Status           */}
            <p className="text-[1rem] text-[#555E68] font-thin">Status</p>
            <span className="rounded-xl  w-16  px-1 py-1 bg-[#FFECE5] flex items-center justify-center">
              <p className="text-xs text-[#F56630]">Awaiting</p>
            </span>
            {/*      Department           */}
            <p className="text-[1rem] text-[#555E68] font-thin">Department</p>
            <p className="text-[#101928] font-light text-[1rem]">Maternity</p>
          </div>
          <div className="flex flex-col border border-[#E4E7EC] px-4 py-4 gap-2 rounded-[10px] w-[22rem] h-[6rem]">
            <div className="flex items-end space-x-2">
              <span>
                <BuildingIcon />
              </span>
              <p className="text-[#475367] text-[12px] font-thin">Client</p>
            </div>
            <div className="flex space-x-2">
              <span className="rounded-full w-8 h-8 bg-[#FFECE5] flex items-center justify-center">
                <p className="text-xs text-[#101928]">W</p>
              </span>
              <span className="flex flex-col">
                <p className="text-[#101928] text-[14px] font-light">
                  Westend Hospital
                </p>
                <p className="text-[#475367] text-[12px] font-thin">
                  Clear street
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <QuoteResponseTable />
      </div>
      <div className="rounded-lg py-6 px-8 border border-[#E4E7EC] mt-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            <NoeFileIcon />
            <span className="flex flex-col items-start ">
              <p className="text-[#1D2739] leading-[24px] text-[20px] font-semibold">
                Terms and Attachments
              </p>
              <p className="text-[#475367] text-[12px] font-thin pl-[5px]">
                Review payment and delivery terms
              </p>
            </span>
          </div>

          <DownTopIcon />
        </div>
      </div>
    </main>
  );
}



