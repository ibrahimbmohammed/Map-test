'use client';

import { useEffect, useState } from 'react';
import Transition from '@lib/hoc/transition-wrapper';
import logo from "@assets/png/map.png";
import { v4 as uuidv4 } from 'uuid';
import NavbarItem from '@atoms/a-nav-item';
import { UrlObject } from 'url';
import { usePathname } from 'next/navigation';

import { IconProps } from '@lib/icons/dashboard/sidebar/Icon.types';
import TechnicianIcon from '@lib/icons/technician';

import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  className?: string;
}

declare type Url = string | UrlObject;

export interface Route {
  id?: number;
  title: string;
  link: Url;
  Icon?: React.ComponentType<IconProps>;
  subTitle?: string;
  icon?: string;
  submenu?: Array<Route | undefined>;
}

function Navbar({ className }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [titles, setTitle] = useState<string | null>(null);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const router = usePathname();

  const toggleSubMenu = () => {
    setIsSubOpen(!isSubOpen);
  };
  useEffect(() => {
    setIsSubOpen(false);
    setTitle(null);
    setIsOpen(false);
  }, [router]);

  const routesItem: Route[] = [
    {
      title: ' ',
      link: '/',
      Icon: TechnicianIcon,
      subTitle: 'Homepage',
    },

    { title: ' ', link: `/auth/login` },
    { title: ' ', link: '/auth/register' },
  ];

  return (
    <nav
      className={`sticky z-20 w-full bg-white  shadow-none drop-shadow-xl lg:top-0  lg:shadow-sm ${className}`}
    >
      <div className="w-full ">
        <div className="flex h-14 w-full flex-row-reverse  items-center lg:h-24  lg:flex-row lg:space-y-0">
          <div className="flex w-11/12 items-center justify-center lg:mx-[3.2rem] lg:w-full lg:space-x-[1rem] xl:space-x-[10rem]">
            <div className="flex w-full min-w-[5rem] flex-shrink-0 items-center justify-center lg:w-auto  ">
              <div className="flex items-center justify-center space-x-1">
                <div className="max-h-[5rem]  max-w-[5rem] cursor-pointer overflow-hidden ">
                  <Link href="/">
                    <Image src={logo?.src} height={80} width={80} alt="navbar logo" />
                  </Link>
                </div>
                <Link href="/" className="cursor-pointer">
                  <span className="cursor-pointer text-xs font-semibold text-primaryColor"> </span>
                </Link>
              </div>
            </div>

            <div className="hidden w-full lg:block ">
              <div className=" flex w-full items-center justify-between">
                <div className="flex space-x-4 pl-16 xl:space-x-9 xl:pl-0 ">
                  {(routesItem || []).map((item: Route) => {
                    if (item.title === 'Login' || item.title === 'Register') return null;

                    return (
                      <NavbarItem
                        key={uuidv4()}
                        link={item.link}
                        title={item.title}
                        submenu={item.submenu}
                        open={isSubOpen}
                        toggleSubMenu={toggleSubMenu}
                      />
                    );
                  })}
                </div>

                <div className="flex space-x-10 ">
                  {(routesItem || []).map((item: Route) => {
                    if (item.title === 'Login' || item.title === 'Register') {
                      return (
                        <NavbarItem
                          key={uuidv4()}
                          link={item.link}
                          title={item.title}
                          submenu={item.submenu}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full w-1/12 rounded-lg  lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg px-3 text-gray-500   focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition show={isOpen} height={isSubOpen ? 'h-fit' : 'h-40'}>
        <div className="lg:hidden">
          <div className="ml-3 mb-3 flex flex-col space-y-8 bg-white px-2 pt-2 pb-3 lg:px-3">
            {(routesItem || []).map((item: Route) => {
              return (
                <NavbarItem
                  key={uuidv4()}
                  link={item.link}
                  title={item.title}
                  submenu={item.submenu}
                  open={isSubOpen}
                  toggleSubMenu={toggleSubMenu}
                  route={routesItem}
                  titles={titles}
                  isMobile
                  setTitles={setTitle}
                />
              );
            })}
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
