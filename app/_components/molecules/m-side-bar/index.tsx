'use client';

import Logo from '@atoms/logo/logo';
import SidebarNavItem from '@atoms/a-side-bar-nav-item';
import { SidebarNavItemProps, ParentNavItem } from '@lib/types/molecules';
import { usePathname } from 'next/navigation';
import { MdMenu, MdOutlineMenuOpen } from 'react-icons/md';
import GirlAvartar from "@assets/png/Avatars.png";
import LogoutIcon from '@/app/_lib/icons/dashboard/logout';

// bg-[#ECEFF9]
const style = {
  active:
    "text-[#344054] pl-3 bg-[#E3EAFB] font-[300] text-[24px] rounded-[4px] font-normal ",
  inactive:
    " text-[#344054] py-[0rem] pl-3 hover:bg-[#E3EAFB] rounded-[4px] hover:text-[#344054] font-light text-[14px] leading-[20.3px]",
  link: `group relative text-[0.88rem] flex space-x-4 px-0 my-[0.05rem] items-center h-[2.5rem]
    w-full my-[0rem] group-hover:cursor-pointer pl-8`,
  activeInner: "text-[#344054] font-normal ",
  inactiveInner: "text-[#344054] font-normal rounded-sm ",
  linkInner: `group relative text-[0.88rem] hover:font-normal hover:bg-[#E3EAFB] hover:text-[#344054] flex  items-center h-[2.5rem]
    w-full  group-hover:cursor-pointer pl-12 `,
  link_hide: "hidden",
  back_active: " ",
  back_inactive: " ",
  icon_active: `fill-[#175CFF]  mt-2 `,
  icon_inactive: `fill-[#667185] group-hover:fill-[#175CFF]  mt-2 `,
};

export interface ISidebarProps {
  toggleShiftDashboardContent?: () => void;
  openDrawer: boolean;
  width?: number;
  toggleOpenDrawer?: () => void;
  toggleOpenSidebar?: () => void;
  showMenuIcon: boolean;
  navItems: ParentNavItem[] | undefined;
}

function Sidebar({
  openDrawer,
  width,
  toggleOpenDrawer,
  toggleShiftDashboardContent,
  showMenuIcon,
  toggleOpenSidebar,
  navItems,
}: ISidebarProps) {
  const pathname = usePathname();
  
  const handleToggleOpenDrawerAndShiftDashboardContent = () => {
    toggleOpenDrawer?.();
    toggleShiftDashboardContent?.();
  };

  const isSmall = width && width < 1280;

  return (
    <div
      id="sidebar"
      className={`duration-400 top-0 left-0  h-full overflow-y-auto overflow-x-hidden  bg-[#F7F9FC]  shadow-lg  transition-all ease-in-out ${
        !openDrawer ? " w-[6.5rem] " : "  "
      } ${
        isSmall ? "w-[15rem]  max-w-[15rem]" : " fixed w-[17rem] max-w-[17rem] "
      } `}
    >
      <div
        id="logo-content"
        className={`${
          isSmall ? "" : "fixed "
        }   h-[5.75rem]  bg-[#F7F9FC]    z-50 w-full`}
      >
        <div
          id="logo"
          className={`flex h-[3.125rem] w-full items-center mt-4 text-slate-600 ${
            !openDrawer && "justify-center"
          }`}
        >
          <Logo className="ml-8" />
          <p className="text-[10px] pl-3 sm:text-[12px] sm:pl-2 leading-[14px] text-[#141460] font-semibold text-wrap max-w-[9rem]">
            {" "}
            Medical Advanced Platform
          </p>
        </div>
        {showMenuIcon && !openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdMenu
              className="fixed top-4 left-[4.5rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
        {showMenuIcon && openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdOutlineMenuOpen
              className="fixed top-4 left-[14rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <ul
        id="nav-list "
        key={Math.random()}
        className={`${
          isSmall ? "mt-[2.25rem]" : "mt-[5.8rem]"
        }  my-[0.3px]  pl-2 pr-10 space-y-2  hover:cursor-pointer`}
      >
        {(navItems || []).map((item: SidebarNavItemProps) => {
          if (item?.type === "navItem") {
            return (
              <SidebarNavItem
                key={item.id}
                asPath={pathname}
                name={item.name}
                path={item.path}
                style={style}
                showIcon
                subNavItems={item.subNavItems}
                hasSubNavItems={item.hasSubNavItems}
                Icon={item.Icon}
                openDrawer={openDrawer}
                toggleOpenSidebar={toggleOpenSidebar} // for mobile screens
                handleToggleOpenDrawerAndShiftDashboardContent={
                  handleToggleOpenDrawerAndShiftDashboardContent
                } // for tablet screens
              />
            );
          }
        })}
      </ul>
      <div className="absolute bottom-0 w-full lg:block mt-[3rem]">
        <ul
          id="nav-list "
          key={Math.random()}
          className=" mt-[2.25rem] my-[0.3px] pl-2 pr-10 space-y-2  hover:cursor-pointer"
        >
          {(navItems || []).map((item: SidebarNavItemProps) => {
            if (item?.type === "bottomItem") {
              return (
                <SidebarNavItem
                  key={item.id}
                  asPath={pathname}
                  name={item.name}
                  path={item.path}
                  style={style}
                  showIcon
                  subNavItems={item.subNavItems}
                  hasSubNavItems={item.hasSubNavItems}
                  Icon={item.Icon}
                  openDrawer={openDrawer}
                  toggleOpenSidebar={toggleOpenSidebar} // for mobile screens
                  handleToggleOpenDrawerAndShiftDashboardContent={
                    handleToggleOpenDrawerAndShiftDashboardContent
                  } // for tablet screens
                />
              );
            }
          })}
        </ul>
        <div className="px-6 flex items-center pt-8 pb-4 space-x-3">
          <span className="">
            <img
              src={GirlAvartar?.src}
              className="rounded-full"
              alt="profile avatar"
              width="40px"
              height="40px"
            />
          </span>
          <span className="w-[8rem]">
            <p className="text-[#101928] text-sm font-normal">Mark Benson</p>
            <p className="text-[#475367] text-sm font-thin truncate">
              markbenson@coremed.com
            </p>
          </span>
          <span className="">
            <LogoutIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
