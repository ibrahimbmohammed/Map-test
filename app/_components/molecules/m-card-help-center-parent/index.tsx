import logo from '@assets/png/topbotcopier-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import ChatIcon from '@/app/_lib/icons/dashboard/chat';

const HelpParentComp = () => {
  return (
    <div className="shadow-[0px_8px_40px_0px_rgba(9,44,76,0.16)] bg-violet-700 flex flex-col px-5 rounded-lg ">
      <div className="bg-white h-fit w-fit px-3 mt-4">
        <Image
          src={logo.src}
          alt="org-logo"
          className="object-cover w-[10rem] overflow-hidden ml-4 mt-6"
          height="150"
          width="60"
        />
      </div>

      <div className="text-white text-3xl leading-10 tracking-wide min-w-[262px] max-w-[262px] ml-1 mt-20">
        Hello there 👋,
        <br />
        How can we help?
      </div>
      <div className="shadow-[0px_8px_20px_0px_rgba(9,44,76,0.10)] bg-white flex xl:min-w-[413px] xl:max-w-[413px]  flex-col ml-1 mt-7 mb-7 px-5 py-10 rounded-lg">
        <div className="w-full flex items-center justify-center">
          <ChatIcon />
        </div>
        <div className="text-zinc-800 text-center text-base font-semibold max-w-[241px] self-center mt-4">
          Speak to an assistant to set your <br />
          Copy Trading Account
        </div>
        <div className="justify-center items-center rounded hover:bg-lime-100 self-center flex max-w-[142px]  flex-col mt-2.5 px-5 py-3.5">
          <Link href="https://api.whatsapp.com/send?phone=447308241996" target="_blank">
            <button className="text-violet-700 text-center text-xs font-semibold leading-4 tracking-normal self-center -mb-px">
              WhatsApp
            </button>
          </Link>
        </div>
        <div className="justify-center items-center rounded hover:bg-lime-100 self-center flex max-w-[142px]  flex-col mt-2.5 px-5 py-3.5">
          <Link href="https://t.me/Topbotcopieradmin" target="_blank">
            <button className="text-violet-700 text-center text-xs font-semibold leading-4 tracking-normal self-center -mb-px">
              Telegram
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpParentComp;
