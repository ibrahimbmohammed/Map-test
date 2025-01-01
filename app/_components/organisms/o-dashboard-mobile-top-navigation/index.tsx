import MenuIcon from '@lib/icons/dashboard/sidebar/MenuIcon';
import { ISidebarSlideOverProps } from '@organisms/o-dashboard-mobile-sidebar-slideover/SidebarSlideOverProps.types';
// import Image from 'next/image';
// import Logo from '@assets/png/small.png';
import ProfileDropDown from '@/app/_components/organisms/o-dashboard-top-navigation/m-profile-dropdown';
import { getUserFromCookies } from '@/app/_lib/cookies';
import DownArrowIcon from '@/app/_lib/icons/dashboard/down';

function MobileTopNavigation({ toggleOpenSidebar }: ISidebarSlideOverProps) {
  const userData = getUserFromCookies();

  return (
    <div className="space-y-6 bg-white px-8 py-2 shadow-md shadow-slate-500/10">
      <div className="flex flex-row items-center justify-between">
        <button
          type="button"
          className="flex flex-col mt-3 space-y-1 items-center justify-center"
          onClick={toggleOpenSidebar}
        >
          <MenuIcon />
          {/* <Image src={Logo.src} className="ml-[6px]" alt="logo" width={25} height={20} /> */}
        </button>
        <div className="mt-3">
          <ProfileDropDown position="-right-0">
            <div className="flex items-center justify-center space-x-2">
              <img
                src={`https://ui-avatars.com/api/?name=${userData?.firstName}+${userData?.lastName}&background=random&length=2&rounded=true&size=70 `}
                className="rounded-full"
                alt="profile avatar"
                width="25px"
                height="25px"
              />
              <DownArrowIcon />
            </div>
          </ProfileDropDown>
        </div>
      </div>

      <div className="" />
    </div>
  );
}

export default MobileTopNavigation;
