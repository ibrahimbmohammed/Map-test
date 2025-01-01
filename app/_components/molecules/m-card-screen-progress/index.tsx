import Image from 'next/image';
import HighlightImage from '@assets/webp/Highlight.webp';
import SuccessCheckmark from '@assets/png/success-checkmark.png';

interface ScreenProgressCompProps {
  handleOpen: () => void;
  accountScreeningApproval: boolean;
}

const ScreenProgressComp = ({ handleOpen, accountScreeningApproval }: ScreenProgressCompProps) => {
  return (
    <div className="flex flex-col  items-center justify-center sm:items-start sm:justify-star  lg:items-center lg:justify-center  h-[26.5rem] w-[21.25rem] bg-white">
      <p className="self-start pl-4 pb-4">Account Verification </p>

      <div className="card w-[16.5rem] h-[19.18rem] bg-[#FAF8FE] text-primary-content relative">
        {accountScreeningApproval ? (
          <div className="card-body mx-auto px-[1rem]">
            <Image src={SuccessCheckmark} alt="verified image" width={150} height={150} />
            <p className="text-[#5D17EB] font-bold text-lg md:text-xl">Account Verified</p>
          </div>
        ) : (
          <div className="card-body px-[1rem]">
            <div
              className="radial-progress  bg-transparent text-[#5D17EB] border-0 border-primary"
              // @ts-ignore
              style={{ '--value': 30, '--size': '7rem' }}
            >
              <span className="flex flex-col">
                <p className="font-light text-[#525252]">Status</p>
                <p className="font-light text-[#525252]">1 of 4</p>
              </span>
            </div>
            <p className="text-[#5D17EB] font-[400] text-lg">Account Screening</p>
            <p className="text-[#0F172A] pr-4 text-sm">
              Get your account screened to become eligible to use Topbotcopier
            </p>
            <div className="card-actions ">
              <button
                onClick={() => handleOpen()}
                className="btn btn-sm  border-0 px-4 h-[2.58rem]  bg-[#5D17EB] group-hover:bg-[#FAF8FE]"
              >
                <p className="font-[600] text-xs group-hover:text-[#5D17EB] text-[#FFFFFF] ">
                  Book a screening now
                </p>
              </button>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 right-0">
          <Image src={HighlightImage} alt="highlight image" width={70} height={50} />
        </div>
      </div>
    </div>
  );
};

export default ScreenProgressComp;
