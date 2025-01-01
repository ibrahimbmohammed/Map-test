import QuoteResponseEditableTable from "../../molecules/m-qoute-editable-table";
import EmptyCalenderIcon from "@/app/_lib/icons/dashboard/main/empty-calender";
import GrayCancleIcon from "@/app/_lib/icons/dashboard/main/gray-cancel";
import { formatter } from "@/app/_lib/utils/helper";
import { useAppDispatch, useAppSelector } from "@/app/_lib/hooks/redux-hooks";
import { Button } from "../../atoms/a-button";
import { useRouter } from "next/navigation";
import { updateQuote } from "@/app/_store/slices/quote-slice";
import { quoteRequests } from "@/app/_lib/utils/mock";

interface QuoteInitialResponseType {
  handleChangePage: () => void;
}

function QuoteInitialResponse({ handleChangePage }: QuoteInitialResponseType) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const quote = useAppSelector((state) => state.quoteData.currentQuote);

  const handleCancle = () => {
    dispatch(updateQuote(quoteRequests));
    router.push("/dashboard/procurement/qoute");
  };
  return (
    <div className="flex flex-col rounded-lg py-6 px-8 space-y-6 border border-[#E4E7EC] mt-[2rem]">
      <div className="flex flex-col">
        <p className="text-[#1A1A21] text-2xl font-semibold">
          Request for Quote
        </p>
        <p className="text-sm font-thin text-[#667185]">
          Fill out these details to send the RFQ
        </p>
      </div>
      <div className="flex flex-col space-y-6 ">
        <div className="flex space-x-6 2xl:justify-between">
          <div className="flex flex-col">
            <p className="text-[#475367] text-sm pb-[2px]">RFQ No</p>
            <input
              placeholder="RFQ-10234"
              className="border h-[2.5rem] w-[32rem] 2xl:w-[41rem] outline-none rounded-md placeholder:text-sm placeholder:pl-2 placeholder:font-thin border-[#D0D5DD] bg-[#F0F2F5]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[#475367] text-sm pb-[2px]">Title</p>
            <input
              placeholder="Request for Equipments"
              className="border h-[2.5rem] w-[32rem] 2xl:w-[41rem] outline-none rounded-md placeholder:text-sm placeholder:pl-2 placeholder:font-thin border-[#D0D5DD] bg-[#F0F2F5]"
            />
          </div>
          <div className="flex flex-col"></div>
        </div>
        <div className="flex space-x-6 2xl:justify-between">
          <div className="flex flex-col">
            <p className="text-[#475367] text-sm pb-[2px]">Department</p>
            <div className="relative">
              <span className="absolute right-3 top-[10px]">
                <GrayCancleIcon />
              </span>
              <input
                placeholder="Maternity"
                className="border h-[2.5rem] w-[32rem] 2xl:w-[41rem] outline-none rounded-md placeholder:text-sm placeholder:pl-2 placeholder:font-thin border-[#D0D5DD] bg-[#F0F2F5]"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#475367] text-sm pb-[2px]">
              Expected delivery date
            </p>
            <span className="relative">
              <div className="absolute top-[10px] left-2">
                <EmptyCalenderIcon />
              </div>
              <input
                placeholder="2024-12-02"
                className="border h-[2.5rem] w-[32rem] 2xl:w-[41rem] outline-none rounded-md placeholder:text-sm placeholder:pl-[36px] placeholder:font-thin border-[#D0D5DD] bg-[#F0F2F5]"
              />
            </span>
            <p className="text-[12px] text-[#667185] font-thin pt-1">
              Calculated based on lead time and issue date
            </p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
      <div className="w-full border-b" />
      <div className="flex flex-col">
        <div className="">
          <p className="text-sm pb-1">Add Items</p>
        </div>
        <QuoteResponseEditableTable />
        <div className="w-full border-b pt-6" />
        <div className="flex w-full pt-4 items-center justify-end">
          <div className="flex space-x-12">
            <p className="text-[#475367] font-thin">Sub Total</p>
            <p className="text-[#475367] font-thin">
              {formatter.format(quote?.total ?? 0)}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start">
            <p className="">Note</p>
          </div>
          <textarea
            className="border rounded-lg outline-none w-[29.5rem] h-[6.625rem] placeholder:text-sm placeholder:font-thin placeholder:text-[#98A2B3] placeholder:pl-4 placeholder:pt-2"
            placeholder="Enter note here"
          ></textarea>
          <div className=" w-[29.5rem] flex items-center justify-end">
            <p className="text-[12px] font-thin text-[#667185]">0/200</p>
          </div>
        </div>
        <div className="w-full border-b pt-7" />
      </div>
      <div className="w-full pt-3 flex items-center justify-end">
        <div className="w-[30rem] space-x-[1.5rem]  flex items-center justify-between">
          <Button
            onClick={() => handleCancle()}
            type="button"
            className="w-[4.25rem]"
            variant="cancelOutline"
            size="xfull"
          >
            <span className="font-normal text-sm">cancel</span>
          </Button>
          <Button
            type="button"
            variant="primaryBorder"
            className="w-[11.75rem]"
            size="xfull"
          >
            <span className="font-normal text-sm">Save as Draft</span>
          </Button>
          <Button
            onClick={() => handleChangePage()}
            type="button"
            variant="primary"
            className="w-[11.75rem]"
            size="xfull"
          >
            <span className="font-normal text-sm text-[#FFFFFF]">Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuoteInitialResponse;
