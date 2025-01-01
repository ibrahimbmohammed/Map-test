'use client';

import { SidebarNavDropDownItemProps } from '@lib/types/molecules';
import Link from 'next/link';
import { forwardRef, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from "react-icons/io";

const SidebarNavDropDownItem = forwardRef<HTMLButtonElement, SidebarNavDropDownItemProps>(
  ({
    id,
    path,
    asPath,
    style,
    Icon,
    Icon2,
    name,
    showIcon,
    subNavItems,
    openDrawer,
    toggleOpenSidebar,
    handleToggleOpenDrawerAndShiftDashboardContent,
  }) => {
    const handleToggleDrawerAndSidebar = () => {
      toggleOpenSidebar?.();
      handleToggleOpenDrawerAndShiftDashboardContent?.();
    };

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(true);
      if ((asPath?.split('/') || '').length > 3) return;
      setIsOpen(false);
    }, [asPath]);

    return (
      <div>
        <li className=" flex flex-col items-center justify-center w-full">
          <div
            className={`w-full flex items-center justify-between  ${
              asPath === path || isOpen === true
                ? style!.active
                : style!.inactive
            } h-[2.5rem]`}
          >
            <button onClick={() => setIsOpen(!isOpen)} className={style!.link}>
              <i className="absolute top-1 left-0">
                <Icon
                  className={`${
                    path === asPath || isOpen === true
                      ? style!.icon_active
                      : style!.icon_inactive
                  }`}
                  extraClassName={`${
                    path === asPath
                      ? style!.extra_icon_active
                      : style!.extra_icon_inactive
                  }`}
                />
              </i>
              {showIcon && <span>{name}</span>}
            </button>

            {isOpen ? (
              <IoIosArrowUp size={20} className=" mr-4" />
            ) : (
              <IoIosArrowUp size={20} className="rotate-180 mr-4" />
            )}
          </div>

          <div
            className={`overflow-hidden  w-full ${
              isOpen ? "h-[5.5rem]" : "h-0"
            } transition-all delay-200 ease-in-out`}
          >
            {subNavItems?.map((subNavItem) => {
              return (
                openDrawer && (
                  <li
                    className={`${
                      subNavItem.path === asPath
                        ? style!.inactive
                        : style!.inactiveInner
                    }`}
                    key={id}
                  >
                    <Link href={subNavItem.path}>
                      <button
                        className={`${style!.linkInner}  `}
                        onClick={() => {
                          handleToggleDrawerAndSidebar();
                        }}
                      >
                        <span>{subNavItem.name}</span>
                      </button>
                    </Link>
                  </li>
                )
              );
            })}
          </div>
        </li>
      </div>
    );
  },
);

export default SidebarNavDropDownItem;
