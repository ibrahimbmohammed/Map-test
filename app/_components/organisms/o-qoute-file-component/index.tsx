import { useDropzone } from "react-dropzone";
import { useAppSelector } from "@/app/_lib/hooks/redux-hooks";
import { Button } from "../../atoms/a-button";
import DownTopIcon from "@/app/_lib/icons/dashboard/down-top";
import FileUploadIcon from "@/app/_lib/icons/dashboard/main/file-upload";
import { useRouter } from "next/navigation";

interface QuoteResponseFileType {
  handleChangePage: () => void;
}

function QuoteResponseFile({ handleChangePage }: QuoteResponseFileType) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const router = useRouter();
  const quote = useAppSelector((state) => state.quoteData.currentQuote);
  const handleIconClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const select = e.currentTarget.nextElementSibling as HTMLSelectElement;
    if (select) {
      select.focus();
      select.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    }
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="flex flex-col rounded-lg py-6 px-8 space-y-6 border border-[#E4E7EC] mt-[2rem]">
      <div className="flex flex-col">
        <p className="text-[#1A1A21] text-2xl font-semibold">
          Terms and Attachments
        </p>
        <p className="text-[14px] font-thin text-[#667185]">
          Provide detailed information on payment and delivery terms
        </p>
      </div>
      <div className="flex flex-col space-y-6 ">
        <div className="flex space-x-6 2xl:space-x-[19rem]">
          <div className="flex flex-col">
            <p className="text-[#475367] text-[14px] pb-[2px] font-normal">
              Payment Terms
            </p>
            <div className="relative ">
              <span
                className="absolute right-3 top-[16px]"
                onClick={handleIconClick}
              >
                <DownTopIcon className="-z-10" />
              </span>
              <select className="border h-[2.5rem] w-[32rem] pl-3 text-[14px] font-thin outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]">
                <option value="" disabled selected>
                  Select payment terms
                </option>
                <option value="net30">Net 30</option>
                <option value="net60">Net 60</option>
                <option value="net90">Net 90</option>
                <option value="immediate">Immediate Payment</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#475367] text-[14px] pb-[2px]">Schedule</p>
            <div className="relative">
              <span
                className="absolute right-3 top-[16px]"
                onClick={handleIconClick}
              >
                <DownTopIcon className="-z-10" />
              </span>
              <select className="border h-[2.5rem] w-[32rem] pl-3 text-[14px] font-thin outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]">
                <option value="" disabled selected>
                  Select schedule
                </option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col"></div>
        </div>
        <div className="flex space-x-6 2xl:space-x-[19rem]">
          <div className="flex flex-col">
            <p className="text-[#475367] text-[14px] pb-[2px]">
              Shipping Method
            </p>
            <div className="relative">
              <span
                className="absolute right-3 top-[16px]"
                onClick={handleIconClick}
              >
                <DownTopIcon className="-z-10" />
              </span>
              <select className="border h-[2.5rem] w-[32rem] pl-3 text-[14px] font-thin outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]">
                <option value="" disabled selected>
                  Select shipping method
                </option>
                <option value="air">Air Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="road">Road Transport</option>
                <option value="rail">Rail Transport</option>
              </select>
              <div className="absolute -bottom-6 w-full border-b" />
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#475367] text-[14px] pb-[2px]">Lead time</p>
            <div className="relative">
              <span
                className="absolute right-3 top-[16px]"
                onClick={handleIconClick}
              >
                <DownTopIcon className="-z-10" />
              </span>
              <select className="border h-[2.5rem] w-[32rem] pl-3 text-[14px] font-thin outline-none rounded-md placeholder:text-[14px] placeholder:pl-2 placeholder:font-thin border-[#D0D5DD]">
                <option value="" disabled selected>
                  Select lead time
                </option>
                <option value="1week">1 Week</option>
                <option value="2weeks">2 Weeks</option>
                <option value="1month">1 Month</option>
                <option value="2months">2 Months</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>

      <div className="flex flex-col pt-4">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col">
            <p className="text-[16px] pb-1 text-[#1D2739]">Attachments</p>
            <p className="text-[14px] font-thin text-[#98A2B3]">
              Attach all necessary files or documents
            </p>
          </div>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="border-[2px] rounded-lg border-[#D0D5DD] border-dashed w-[32.1rem] h-[15.68rem] flex items-center justify-center flex-col space-y-1"
          >
            <input {...getInputProps()} />
            <div className="rounded-full w-[56px] h-[56px] bg-[#F0F2F5] flex items-center justify-center ">
              <FileUploadIcon />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <p className="text-primaryBlueColor text-sm font-normal pr-2 cursor-pointer">
                  {" "}
                  Click to upload
                </p>
                <p className="text-[#475367] text-sm font-light">
                  {" "}
                  or drag and drop
                </p>
              </div>
              <div className="text-[#98A2B3] text-sm  font-thin">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </div>
            </div>
            <div className="flex items-center justify-between py-3 space-x-2">
              <div className="">
                <div className=" w-[130px] border-b border-[#F0F2F5]  " />
              </div>
              <div className="text-[#98A2B3] text-[12px] leading-[17.4px]">
                OR
              </div>
              <div className="">
                <div className=" w-[130px] border-b border-[#F0F2F5] " />
              </div>
            </div>
            <div className="">
              <Button
                type="button"
                variant="primaryBorder"
                className="w-[6.75rem] h-[2.4rem] flex items-center justify-center"
                size="xfull"
              >
                <span className="font-normal text-[14px]">Browse Files</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black font-thin text-sm">
        <ul>{files}</ul>
      </div>
      <div className="w-full pt-3 flex items-center justify-end">
        <div className="w-[30rem] space-x-[1.5rem]  flex items-center justify-between">
          <Button
            onClick={() => router.push("/dashboard/procurement/qoute")}
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
            onClick={() => handleChangePage()}
            type="button"
            variant="primary"
            className="w-[11.75rem]"
            size="xfull"
          >
            <span className="font-normal text-[14px] text-[#FFFFFF]">
              Continue
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuoteResponseFile;
