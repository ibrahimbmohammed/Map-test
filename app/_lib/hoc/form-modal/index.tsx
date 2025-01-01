'use client';

import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import CanCleIcon from '../../icons/dashboard/main/cancel';

interface Props {
  title: string;
  showTitle?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  width?: string;
  className?: string;
  autoClose?: boolean;
}

const FormModal = ({
  title,
  showTitle = true,
  isOpen,
  setIsOpen,
  children,
  width = 'w-full md:w-[33rem] lg:w-[23rem] xl:w-[35rem]',
  className,
  autoClose = true,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-[20] overflow-y-auto ${className}`}
        onClose={() => {
          if (autoClose) {
            return setIsOpen(false);
          }
          return null;
        }}
      >
        <div className="min-h-screen px-4 text-center">
          {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
          
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`my-8 inline-block transform bg-white ${
                showTitle ? 'rounded-2xl px-5 py-3 ' : 'rounded-lg px-0 py-0'
              }  text-left align-middle shadow-xl transition-all ${width || ''}`}
            >
              {showTitle && (
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between  border-gray-400 pt-1 pb-5"
                >
                  <div className="w-[95%] flex items-center justify-center   text-lg font-medium ">
                    <p className="pt-2 text-center text-[15px] font-bold">{title}</p>
                  </div>
                  {/* <div className=" bg-[#F3F3FF]  flex items-center justify-center overflow-hidden rounded-full px-1 py-1">
                    <button type="button" className="" onClick={() => setIsOpen(false)}>
                      <CanCleIcon className="" />
                    </button>
                  </div> */}
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormModal;


