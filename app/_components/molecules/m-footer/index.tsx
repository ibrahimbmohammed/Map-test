import Link from 'next/link';
import SvgIcon1 from './icons/SvgIcon1';
import SvgIcon2 from './icons/SvgIcon2';
import SvgIcon3 from './icons/SvgIcon3';
import SvgIcon4 from './icons/SvgIcon4';
import SvgIcon5 from './icons/SvgIcon5';

function Footer() {
  return (
    <div className="relative  bg-slate-900 h-[6rem] flex justify-start items-stretch flex-col max-w-full box-border pt-14 pb-[12.5px] px-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-2 grow-0 shrink-0 basis-auto">
        <p className="text-base font-normal text-center text-white grow-0 shrink-0 basis-auto ml-2">
          @ 2023. All rights reserved.
        </p>
        <div className="flex items-center flex-col xl:flex-row flex-wrap grow-0 shrink-0 basis-auto space-y-0">
          <div className="flex items-center flex-row flex-wrap gap-6 grow-0 shrink-0 basis-auto">
            <Link
              className="text-base font-normal text-white grow-0 shrink-0 basis-auto"
              href="/faqs"
            >
              FAQs
            </Link>
            <span className="text-base font-normal text-white grow-0 shrink-0 basis-auto">
              About
            </span>
            <span className="text-base font-normal text-white grow-0 shrink-0 basis-auto">
              Support
            </span>
          </div>
          <div className="flex justify-start items-start flex-row gap-4 grow-0 shrink-0 basis-auto lg:ml-4 pt-[2rem] lg:pt-[0]">
            <SvgIcon1 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon2 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon3 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon4 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
            <SvgIcon5 className="w-6 h-6 text-white flex grow-0 shrink-0 basis-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
