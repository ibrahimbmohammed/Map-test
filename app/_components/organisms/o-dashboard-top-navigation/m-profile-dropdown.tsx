'use client';

import { Menu, Transition } from '@headlessui/react';
import { useAppDispatch } from '@lib/hooks/redux-hooks';
import LogoutIcon from '@lib/icons/dashboard/sidebar/LogoutIcon';
import ProfileIcon from '@lib/icons/dashboard/sidebar/ProfileIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import clearDashboardSlicesAndLogoutUser from '@store/utils';

interface IProfileDropDownProps {
  children: React.ReactNode;
  position?: string;
}

function ProfileDropDown({ children, position = '-right-5' }: IProfileDropDownProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(clearDashboardSlicesAndLogoutUser());
    router.replace('/auth/login');
  };

  return (
    <div>
      <Menu as="div" className="relative z-10 inline-block text-left">
        <div>
          <Menu.Button>{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${position}`}
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <Link href="/dashboard/settings">
                      <button
                        className={`${
                          active
                            ? "bg-primaryBlueColor text-white"
                            : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <ProfileIcon className="mr-2 fill-white" />
                        ) : (
                          <ProfileIcon className="mr-2 fill-black" />
                        )}
                        Profile
                      </button>
                    </Link>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button
                      type="button"
                      className={`${
                        active
                          ? "bg-primaryBlueColor text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={logoutUser}
                    >
                      <span>
                        {active ? (
                          <LogoutIcon className="mr-2 fill-white" />
                        ) : (
                          <LogoutIcon className="mr-2 fill-slate-800" />
                        )}{" "}
                      </span>
                      Log Out
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default ProfileDropDown;
