/* eslint-disable no-nested-ternary */

'use client';

import { UrlObject } from 'url';
import type { Route } from '@molecules/m-navbar';
import Link from '@lib/hoc/link';
import DropDownItem from '@atoms/a-drop-down-item';
import { v4 as uuidv4 } from 'uuid';
import { MdArrowDropDown } from 'react-icons/md';
import MyPopover from '@lib/hoc/pop-over-wrapper';
import { Dispatch, SetStateAction, useState } from 'react';
import ActiveButton from '@lib/hoc/button-link';

declare type Url = string | UrlObject;

interface NavItemProps {
  open?: boolean;
  title: string;
  link?: Url;
  titles?: string | null;
  setTitles?: Dispatch<SetStateAction<string | null>>;
  route?: Array<Route | undefined>;
  activeClassName?: string;
  isMobile?: boolean;
  submenu?: Array<Route | undefined>;
  toggleSubMenu?: () => void;
  className?: string;
}

function NavItem({
  open,
  link,
  title,
  submenu,
  titles,
  setTitles,
  route,
  isMobile = false,
  activeClassName = 'text-primaryColor font-bold',
  toggleSubMenu,
  className,
}: NavItemProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [storedTimer, setStoredTimer] = useState<NodeJS.Timeout | null>(null);
  const submenus = route?.find((routeItem) => routeItem?.title === titles);

  const clearTimer = () => {
    if (storedTimer) clearTimeout(storedTimer);
  };

  const closePopover = () => {
    const timer = setTimeout(() => {
      setIsShowing(false);
      clearTimer();
    }, 1000);

    setStoredTimer(timer);
  };

  const openPopover = () => {
    setIsShowing(false);
    if (isShowing === false) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
      setIsShowing(true);
    }
  };

  const closesPopover = () => {
    setIsShowing(false);
  };

  const handleClick = () => {
    if (open === true && title === titles && toggleSubMenu) {
      toggleSubMenu();
    } else if (open === true && setTitles) {
      setTitles(title);
    } else if (setTitles && toggleSubMenu) {
      setTitles(title);
      toggleSubMenu();
    }
  };

  return submenu ? (
    <div className="group flex flex-col  lg:relative  lg:items-center">
      <span onMouseLeave={() => closePopover()} className="inline-flex items-start space-x-2  ">
        {isMobile ? (
          <ActiveButton
            href={link as Url}
            onClick={() => handleClick()}
            className="cursor-pointer text-black  text-sm capitalize hover:text-secondaryColor "
            activeClassName={activeClassName}
            key={uuidv4()}
          >
            <p
              className="w-fit  capitalize"
              onMouseEnter={() => openPopover()}
              onMouseLeave={() => closesPopover()}
            >
              {title === 'contact_us' ? 'contact us' : title}
            </p>
          </ActiveButton>
        ) : title === 'Register' ? (
          <Link
            href={link as Url}
            className=" cursor-pointer text-black text-sm capitalize hover:text-secondaryColor "
            activeClassName={activeClassName}
            key={uuidv4()}
          >
            <p
              className="w-fit    capitalize"
              onMouseEnter={() => openPopover()}
              onMouseLeave={() => closesPopover()}
            >
              {title}
            </p>
          </Link>
        ) : (
          <Link
            href={link as Url}
            className=" cursor-pointer text-black text-sm capitalize hover:text-secondaryColor "
            activeClassName={activeClassName}
            key={uuidv4()}
          >
            <p
              className="w-fit  capitalize"
              onMouseEnter={() => openPopover()}
              onMouseLeave={() => closesPopover()}
            >
              {title === 'contact_us' ? 'contact us' : title}
            </p>
          </Link>
        )}
        <div role="none" className="  hover:cursor-pointer" onClick={handleClick}>
          <div className="flex lg:hidden">
            <MdArrowDropDown className="text-lg text-gray-300" />
          </div>
          <div className=" hidden lg:flex ">
            <MyPopover
              panelClassName="w-[20rem] -left-28"
              show={isShowing}
              setIsShowing={setIsShowing}
            >
              <MdArrowDropDown className=" text-lg text-gray-300" />
              <div className="hidden space-y-2 overflow-hidden rounded bg-white shadow-2xl group-hover:block lg:hidden">
                {submenu?.map((item) => {
                  return (
                    <DropDownItem
                      key={uuidv4()}
                      link={item?.link}
                      title={item?.title}
                      Icon={item?.Icon ?? item?.icon}
                      subTitle={item?.subTitle}
                    />
                  );
                })}
              </div>
            </MyPopover>
          </div>
        </div>
      </span>
      {/* Mobile Nav */}
      {title === titles ? (
        <div
          className={`${
            open ? 'mt-2 h-fit  ' : 'h-0'
          } w-[10rem] space-y-2 overflow-hidden rounded-md  bg-white  transition-all delay-150 ease-in-out lg:absolute  lg:top-[2rem]  lg:mt-0 lg:hidden lg:space-y-3 lg:px-3 lg:drop-shadow-lg`}
        >
          {submenus?.submenu &&
            submenus?.submenu.map((item) => (
              <DropDownItem key={uuidv4()} link={item?.link} title={item?.title} />
            ))}
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    <Link
      href={link as Url}
      className="cursor-pointer text-black text-sm"
      activeClassName={activeClassName}
      key={uuidv4()}
    >
      <p className={`${className}`}>{title === 'contact_us' ? 'contact us' : title}</p>
    </Link>
  );
}

export default NavItem;
