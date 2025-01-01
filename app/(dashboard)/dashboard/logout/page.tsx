'use client';

import { useAppDispatch } from '@lib/hooks/redux-hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import clearDashboardSlicesAndLogoutUser from '@store/utils';
import FormModal from '@/app/_lib/hoc/form-modal';

export default function Logout() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(clearDashboardSlicesAndLogoutUser());
    router.replace('/auth/login');
  };

  const handleLogout = () => {
    logoutUser();
    setIsOpen(!isOpen);
  };
  return (
    <FormModal
      title=" "
      className="z-50"
      width=" w-[20rem] xl:w-[45rem]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="w-full flex-col flex items-center justify-center mt-[0rem] ">
        <p className="text-red-500 text-2xl pb-[2rem]">
          Are you sure you want to logout out
        </p>
        <button
          onClick={() => {
            handleLogout();
          }}
          className="btn btn-sm  border-0 px-4 h-[2.58rem]  bg-primaryBlueColor group-hover:bg-[#FAF8FE] mb-[1rem]"
        >
          <p className="font-[600] text-xs group-hover:text-primaryBlueColor text-[#FFFFFF] ">
            Logout
          </p>
        </button>
      </div>
    </FormModal>
  );
}
