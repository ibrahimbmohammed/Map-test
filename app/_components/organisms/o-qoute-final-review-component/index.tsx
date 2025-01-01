import DottenIcon from "@/app/_lib/icons/dashboard/dotted";
import QuoteResponseTable from "../../molecules/m-qoute-table";
import NoeFileIcon from "@/app/_lib/icons/dashboard/main/neo-file";
import DownTopIcon from "@/app/_lib/icons/dashboard/down-top";
import { Button } from "../../atoms/a-button";
import GrayShareIcon from "@/app/_lib/icons/dashboard/gray-share";
import { useState } from "react";
import MyModal from "@/app/_lib/hoc/modal";

interface QuoteResponseFinalReviewType {
  handleChangePage: () => void;
}

function QuoteResponseFinalReview({
  handleChangePage,
}: QuoteResponseFinalReviewType) {
    const [open, onOpen] = useState(false);
    const toggleModal = ()=> {
        onOpen(!open);
    };
  return (
    <>
      <div className="mt-[2rem]">
        <div className="rounded-lg py-6 px-8 border border-[#E4E7EC]">
          <div className="flex items-center justify-between pb-[1.5rem]">
            <p className="font-semibold text-[20px] text-[#1D2739]">
              Quote Information
            </p>
            <p className="font-thin text-[14px] text-[#667185]">
              <GrayShareIcon />
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="grid grid-cols-2 gap-3">
              {/*      Title           */}
              <p className="text-[1rem] text-[#555E68] font-thin ">Title</p>
              <p className="text-[#344054] font-light">
                Request for Equipments
              </p>
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
        <div className="w-full pt-6 flex items-center justify-end">
          <div className="w-[30rem] space-x-[1.5rem]  flex items-center justify-between">
            <Button
              //onClick={() => handleChangePage()}
              type="button"
              className="w-[4.25rem]"
              variant="cancelOutline"
              size="xfull"
            >
              <span className="font-normal text-[14px]">cancel</span>
            </Button>
            <Button
              type="button"
              variant="primaryBorder"
              className="w-[11.75rem]"
              size="xfull"
            >
              <span className="font-normal text-[14px]">Save as Draft</span>
            </Button>
            <Button
              onClick={() => toggleModal()}
              type="button"
              variant="primary"
              className="w-[11.75rem]"
              size="xfull"
            >
              <span className="font-normal text-[14px] text-[#FFFFFF]">
                Submit
              </span>
            </Button>
          </div>
        </div>
      </div>
      <MyModal isOpen={open} setIsOpen={toggleModal} />
    </>
  );
}

export default QuoteResponseFinalReview;
