/* eslint-disable import/no-extraneous-dependencies */

import ProfileDropDown from '@/app/_components/organisms/o-dashboard-top-navigation/m-profile-dropdown';
import { getUserFromCookies } from '@/app/_lib/cookies';
import BellIcon from '@/app/_lib/icons/dashboard/bell';
import ChatTopIcon from '@/app/_lib/icons/dashboard/chat-top';
import DownTopIcon from '@/app/_lib/icons/dashboard/down-top';
import SearchIcon from '@/app/_lib/icons/dashboard/search';
import GirlAvartar from "@assets/png/Avatars.png"
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

function MainTopNavigation() {
const router = useRouter()
 const pathname = usePathname();
 const isInQuote = pathname === "/dashboard/procurement/qoute";

  return (
    <div className="fixed flex flex-col justify-center space-y-1 bg-transparent min-h-[4rem]   w-[calc(100vw_-_16rem)]  z-20">
      <div className="h-[4rem] relative w-full bg-white flex items-center justify-end border-b border-[#F0F2F5] ">
        {isInQuote && (
          <div
            onClick={() => router.back()}
            className=" absolute cursor-pointer left-7 top-5 flex items-center space-x-2 self-stretch"
          >
            <span>
              <DownTopIcon className="rotate-90" />
            </span>
            <p className="text-[#667185] text-sm">Back</p>
          </div>
        )}
        <div className="flex items-center">
          <div className="w-[50%] ml-4   ">
            <div className="relative">
              <SearchIcon className="absolute top-4 left-5" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-white placeholder:text-sm placeholder:font-thin border  border-[#E4E7EC] rounded-[6px] h-[2.8rem] w-[26.5rem] text-[#333333] text-[100] placeholder:text-[#333333]  pl-12 outline-none"
              />
            </div>
            <div className="">
              <p className="capitalize lg:text-2xl font-[350]" />
            </div>
          </div>

          <div className="flex w-[60%]  flex-row items-center justify-end space-x-6">
            <div className="ml-4 inline-flex items-center  space-x-4 px-[1rem] py-[0.35rem]">
              <span>
                <BellIcon />
              </span>
              <span>
                <ChatTopIcon />
              </span>
              <span className="flex mt-1 items-center justify-center space-x-2">
                <ProfileDropDown position="-right-50">
                  <img
                    src={GirlAvartar?.src}
                    className="rounded-full"
                    alt="profile avatar"
                    width="40px"
                    height="40px"
                  />
                </ProfileDropDown>
                <span className="flex flex-col space-y-1">
                  <p className="text-sm font-light text-secondaryColor">
                    <DownTopIcon />
                  </p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTopNavigation;
